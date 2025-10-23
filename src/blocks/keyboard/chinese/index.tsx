import { useState, useCallback, useEffect, useMemo } from 'react';
import styles from './index.module.scss';
import { CHINESE_WORDS } from './constant';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';

export interface ChineseInputMethodProps {
  /** current pinyin input */
  pinyinInput: string;
  /** callback for selecting candidate */
  onSelectCandidate: (candidate: string, keepPinyin?: string) => void;
  /** callback for clearing pinyin input */
  onClearPinyin: () => void;
  /** whether to show */
  visible: boolean;
  /** custom style class name */
  className?: string;
}

export const ChineseInputMethod: React.FC<ChineseInputMethodProps> = ({
  pinyinInput,
  onSelectCandidate,
  onClearPinyin,
  visible,
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Number of candidates per page
  const CANDIDATES_PER_PAGE = 10;

  // Auto-segmentation function
  const checkAutoSegmentation = useCallback((input: string) => {
    if (input.length < 3) return null; // Minimum 3 characters to consider segmentation

    // Common pinyin initial letters to validate if suffix could be valid pinyin
    const validInitials = [
      'b',
      'p',
      'm',
      'f',
      'd',
      't',
      'n',
      'l',
      'g',
      'k',
      'h',
      'j',
      'q',
      'x',
      'z',
      'c',
      's',
      'r',
      'y',
      'w',
      'a',
      'o',
      'e',
      'i',
      'u',
      'v',
    ];

    // Try matching from longest possible pinyin first (prioritize longer pinyin matches)
    for (let i = Math.min(input.length - 1, 6); i >= 2; i--) {
      const prefix = input.substring(0, i);
      const suffix = input.substring(i);

      // Check if prefix is valid pinyin with candidates
      const chars = CHINESE_WORDS[prefix as keyof typeof CHINESE_WORDS];
      if (chars && chars.length > 0) {
        // Check if suffix could be a valid pinyin start
        if (suffix.length >= 1 && validInitials.includes(suffix[0])) {
          // Avoid splitting complete valid pinyin
          // e.g., if input is "ning" and "ning" exists in dictionary, don't split
          if (!CHINESE_WORDS[input as keyof typeof CHINESE_WORDS]) {
            return {
              prefix,
              suffix,
              firstCandidate: chars[0],
            };
          }
        }
      }
    }

    return null;
  }, []);

  const candidates = useMemo(() => {
    if (!pinyinInput) return [];

    const input = pinyinInput.toLowerCase().trim();
    const results: string[] = [];
    const chars = CHINESE_WORDS[input as keyof typeof CHINESE_WORDS];

    if (chars) {
      results.push(...chars);
    }

    if (results.length < 9) {
      (Object.keys(CHINESE_WORDS) as Array<keyof typeof CHINESE_WORDS>).forEach((key) => {
        if (key.startsWith(input) && key !== input) {
          const matchedWords = CHINESE_WORDS[key].slice(0, 3);
          results.push(...matchedWords);
        }
      });
    }

    // 3. Fuzzy matching - handle common pinyin variants and abbreviations
    if (results.length < 9) {
      // Handle simplified initials (zh->z, ch->c, sh->s)
      const fuzzyInput = input
        .replace(/^zh/, 'z')
        .replace(/^ch/, 'c')
        .replace(/^sh/, 's');
      const res = CHINESE_WORDS[fuzzyInput as keyof typeof CHINESE_WORDS];
      if (fuzzyInput !== input && res) {
        results.push(...res.slice(0, 2));
      }

      // Handle vowel variants (an->ang, en->eng, in->ing)
      const vowelVariants = [
        input.replace(/an$/, 'ang'),
        input.replace(/en$/, 'eng'),
        input.replace(/in$/, 'ing'),
        input.replace(/ang$/, 'an'),
        input.replace(/eng$/, 'en'),
        input.replace(/ing$/, 'in'),
      ];

      vowelVariants.forEach((variant) => {
        const res = CHINESE_WORDS[variant as keyof typeof CHINESE_WORDS];
        if (variant !== input && res) {
          results.push(... res.slice(0, 1));
        }
      });
    }

    // 4. Include matching - find longer words containing the input
    if (results.length < 9) {
      (Object.keys(CHINESE_WORDS) as Array<keyof typeof CHINESE_WORDS>).forEach((key) => {
        if (key.includes(input) && key !== input && !key.startsWith(input)) {
          results.push(...CHINESE_WORDS[key as keyof typeof CHINESE_WORDS].slice(0, 1));
        }
      });
    }

    if (results.length < 5 && input.length > 0) {
      try {
        // Add common characters as fallback when not enough candidates
        const fallbackChars = [
          '的',
          '一',
          '是',
          '在',
          '不',
          '了',
          '有',
          '和',
          '人',
          '这',
          '中',
          '大',
          '为',
          '上',
          '个',
        ];
        results.push(...fallbackChars.slice(0, 10));
      } catch {
        // Pinyin-pro processing failed, using fallback
      }
    }

    // Remove duplicates and sort (not limited by number, for pagination)
    const uniqueResults = [...new Set(results)];

    // Sort by length and frequency (single characters first, then double characters)
    return uniqueResults.sort((a, b) => {
      // Prioritize single characters
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      // Same length in original order (already sorted by frequency)
      return 0;
    });
  }, [pinyinInput]);

  // Calculate pagination info
  const totalPages = Math.ceil(candidates.length / CANDIDATES_PER_PAGE);
  const currentPageCandidates = candidates.slice(
    currentPage * CANDIDATES_PER_PAGE,
    (currentPage + 1) * CANDIDATES_PER_PAGE,
  );

  // Reset selected index and current page when candidate changes
  useEffect(() => {
    setSelectedIndex(0);
    setCurrentPage(0);
  }, [candidates]);

  // Auto-segmentation effect
  useEffect(() => {
    if (!pinyinInput || pinyinInput.length < 3) return;

    const segmentation = checkAutoSegmentation(pinyinInput);
    if (segmentation) {
      // Delay execution to avoid too frequent segmentation
      const timer = setTimeout(() => {
        // Auto-select first candidate and keep remaining pinyin
        onSelectCandidate(segmentation.firstCandidate, segmentation.suffix);
      }, 300); // 300ms delay to give user time to continue typing

      return () => clearTimeout(timer);
    }
  }, [pinyinInput, checkAutoSegmentation, onSelectCandidate]);

  // Pagination functions
  const goToPrevPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setSelectedIndex(0);
    }
  }, [currentPage]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      setSelectedIndex(0);
    }
  }, [currentPage, totalPages]);

  // Handle candidate selection
  const handleCandidateSelect = useCallback(
    (candidate: string, index: number) => {
      setSelectedIndex(index);
      onSelectCandidate(candidate);
    },
    [onSelectCandidate],
  );

  // Keyboard navigation support
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!visible || candidates.length === 0) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (selectedIndex > 0) {
            setSelectedIndex((prev) => prev - 1);
          } else if (currentPage > 0) {
            // If at first candidate, switch to last candidate of previous page
            goToPrevPage();
            setSelectedIndex(
              Math.min(
                CANDIDATES_PER_PAGE - 1,
                candidates.slice(
                  (currentPage - 1) * CANDIDATES_PER_PAGE,
                  currentPage * CANDIDATES_PER_PAGE,
                ).length - 1,
              ),
            );
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (selectedIndex < currentPageCandidates.length - 1) {
            setSelectedIndex((prev) => prev + 1);
          } else if (currentPage < totalPages - 1) {
            // If at last candidate, switch to first candidate of next page
            goToNextPage();
            setSelectedIndex(0);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          goToPrevPage();
          break;
        case 'ArrowDown':
          event.preventDefault();
          goToNextPage();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (currentPageCandidates[selectedIndex]) {
            onSelectCandidate(currentPageCandidates[selectedIndex]);
          }
          break;
        case 'Escape':
          event.preventDefault();
          onClearPinyin();
          break;
        // Number key shortcuts
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': {
          event.preventDefault();
          const numIndex = parseInt(event.key) - 1;
          if (numIndex < currentPageCandidates.length) {
            onSelectCandidate(currentPageCandidates[numIndex]);
          }
          break;
        }
      }
    },
    [
      visible,
      candidates,
      currentPageCandidates,
      selectedIndex,
      currentPage,
      totalPages,
      onSelectCandidate,
      onClearPinyin,
      goToPrevPage,
      goToNextPage,
    ],
  );

  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [visible, handleKeyDown]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`${styles.chineseInputMethod} ${className}`}>
      {/* Candidate list */}
      {candidates.length > 0 && (
        <div className={styles.candidatesContainer}>
          <div className={styles.candidatesRow}>
            {/* Previous page button */}
            {totalPages > 1 && (
              <Button
                size="large"
                className={styles.pageButton}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                title="Previous page"
              >
                <Icon name='prev' size={26} />
              </Button>
            )}

            {/* Candidate list */}
            <div className={styles.candidatesList}>
              {currentPageCandidates.map((candidate, index) => (
                <button
                  key={`${candidate}-${currentPage}-${index}`}
                  className={`${styles.candidateItem} ${
                    index === selectedIndex ? styles.selected : ''
                  }`}
                  onClick={() => handleCandidateSelect(candidate, index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  title={`Select "${candidate}" (Press ${index + 1})`}
                >
                  <span className={styles.candidateNumber}>{index + 1}</span>
                  <span className={styles.candidateText}>{candidate}</span>
                </button>
              ))}
            </div>

            {/* Next page button */}
            {totalPages > 1 && (
              <Button
                size="large"
                className={styles.pageButton}
                onClick={goToNextPage}
                disabled={currentPage >= totalPages - 1}
                title="Next page"
              >
                <Icon name='next' size={26} />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
