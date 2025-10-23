import { useState, useCallback, useEffect } from "react";
import i18n from "i18next";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styles from "./index.module.scss";

import { renderToString } from "react-dom/server";
import { ChineseInputMethod } from "./chinese";
import { Icon } from "../../components/icon";

export type KeyboardLayout =
  | "default"
  | "numeric"
  | "symbol"
  | "numOnly"
  | "chinese";
export type InputMode = "english" | "chinese";

export interface KeyboardProps {
  /** Whether keyboard is visible */
  visible?: boolean;
  /** Keyboard layout */
  layout?: KeyboardLayout;
  /** Keyboard layout name */
  layoutName?: "default" | "shift";
  /** Input mode for language switching */
  inputMode?: InputMode;
  /** Input type */
  inputType?: "text" | "number" | "password";
  /** Maximum length */
  maxLength?: number;

  /** Whether to show close button */
  showCloseButton?: boolean;

  /** Target input element (optional, will auto-detect if not provided) */
  targetInput?: HTMLInputElement | null;
  /** Custom CSS class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Event handlers */
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  onClose?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onLanguageToggle?: (newMode: InputMode) => void;
}

export const VirtualKeyboard: React.FC<KeyboardProps> = ({
  layout: _layout,
  layoutName: _layoutName = "default",
  inputMode: _inputMode,
  maxLength,
  targetInput,
  className = "",
  style,
  onChange,
  onEnter,
  onClose,
  onClear,
  onNext,
  onPrev,
  onLanguageToggle,
}) => {
  const [layoutName, setLayoutName] = useState(_layoutName);
  const [layout, setLayout] = useState(_layout || "default");
  const [inputMode, setInputMode] = useState<InputMode>(
    _inputMode || "english"
  );
  const [input, setInput] = useState("");
  const [pinyinInput, setPinyinInput] = useState("");
  const [focusedInput, setFocusedInput] = useState<HTMLInputElement | null>(
    null
  );

  // Helper function to focus input and move cursor to end
  const focusInputWithCursorAtEnd = (
    input: HTMLInputElement | HTMLTextAreaElement | null | undefined
  ) => {
    if (input) {
      input.focus();
      // Move cursor to the end of the input
      if (
        input instanceof HTMLInputElement ||
        input instanceof HTMLTextAreaElement
      ) {
        const length = input.value.length;
        input.setSelectionRange(length, length);
      }
    }
  };

  // Update focused input when target changes
  useEffect(() => {
    if (targetInput) {
      setFocusedInput(targetInput);
      // Sync keyboard display with target input value
      const targetValue = targetInput.value || "";
      setInput(targetValue);
    }
  }, [targetInput]);

  // Keyboard layouts
  const layouts = {
    default: {
      default: [
        "q w e r t y u i o p {bksp}",
        "a s d f g h j k l {confirm}",
        "{caps} z x c v b n m {comma} {dot}",
        "{123} {space}",
      ],
      shift: [
        "Q W E R T Y U I O P {bksp}",
        "A S D F G H J K L {confirm}",
        "{caps} Z X C V B N M {comma} {dot}",
        "{123} {space}",
      ],
    },
    numeric: {
      default: ["1 2 3 {bksp}", "4 5 6 {confirm}", "7 8 9", "{abc} 0 {clear}"],
    },
    numOnly: {
      default: ["1 2 3 {bksp}", "4 5 6 {confirm}", "7 8 9", "{00} 0 {clear}"],
    },
    symbol: {
      default: [
        "! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} [ ] { } | \\",
        "{lock} ; ' \" , . / {enter}",
        "{shift} < > ? ~ {shift}",
        "{space}",
      ],
    },
  };

  // Disable default onChange, we manage it manually through onKeyPress
  const handleKeyboardChange = () => {};

  // Handle Chinese candidate selection
  const handleChineseCandidateSelect = useCallback(
    (candidate: string, keepPinyin?: string) => {
      const newInput = input + candidate;

      if (maxLength && newInput.length > maxLength) {
        return;
      }

      setInput(newInput);

      // If auto-segmentation, keep remaining pinyin; otherwise clear pinyin input
      const remainingPinyin = keepPinyin || "";
      setPinyinInput(remainingPinyin);

      // Update the focused input if it exists
      if (focusedInput) {
        // If has remaining pinyin, display newInput + remainingPinyin; otherwise only newInput
        const displayValue = remainingPinyin
          ? newInput + remainingPinyin
          : newInput;
        focusedInput.value = displayValue;
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        focusedInput.dispatchEvent(inputEvent);
        focusedInput.dispatchEvent(changeEvent);
      }

      // If has remaining pinyin, onChange passes complete display value; otherwise only selected content
      const changeValue = remainingPinyin
        ? newInput + remainingPinyin
        : newInput;
      onChange?.(changeValue);
    },
    [input, maxLength, onChange, focusedInput]
  );

  // Clear pinyin input
  const handleClearPinyin = useCallback(() => {
    setPinyinInput("");
  }, []);

  // Handle language toggle for the currently focused input
  const handleLanguageToggle = useCallback(() => {
    const newMode: InputMode = inputMode === "english" ? "chinese" : "english";
    setInputMode(newMode);
    setPinyinInput(""); // Clear pinyin when switching modes

    if (focusedInput) {
      const newLang = newMode === "chinese" ? "zh" : "en";
      focusedInput.setAttribute("lang", newLang);
    }

    onLanguageToggle?.(newMode);
  }, [inputMode, focusedInput, onLanguageToggle]);

  const addToInput = useCallback(
    (char: string) => {
      // Add character to input

      // In Chinese mode, add to pinyin input for letters
      if (inputMode === "chinese" && /^[a-zA-Z]$/.test(char)) {
        const newPinyinInput = pinyinInput + char.toLowerCase();
        setPinyinInput(newPinyinInput);

        // Display pinyin in the actual input field
        const displayValue = input + newPinyinInput;

        // Update the focused input to show current input + pinyin
        if (focusedInput) {
          focusedInput.value = displayValue;
          // Dispatch events to ensure React components detect the change
          const inputEvent = new Event("input", { bubbles: true });
          const changeEvent = new Event("change", { bubbles: true });
          focusedInput.dispatchEvent(inputEvent);
          focusedInput.dispatchEvent(changeEvent);
        }

        onChange?.(displayValue);
        return;
      }

      // For non-letter characters or English mode, add directly to input
      const newInput = input + char;

      if (maxLength && newInput.length > maxLength) {
        return;
      }

      setInput(newInput);

      // Update the focused input if it exists
      if (focusedInput) {
        focusedInput.value = newInput;
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        focusedInput.dispatchEvent(inputEvent);
        focusedInput.dispatchEvent(changeEvent);
      }
      onChange?.(newInput);
    },
    [input, pinyinInput, inputMode, maxLength, onChange, focusedInput]
  );

  const handleBackspace = useCallback(() => {
    // In Chinese mode, first try to delete from pinyin input
    if (inputMode === "chinese" && pinyinInput.length > 0) {
      const newPinyinInput = pinyinInput.slice(0, -1);
      setPinyinInput(newPinyinInput);

      // Update display to show current input + remaining pinyin
      const displayValue = input + newPinyinInput;

      if (focusedInput) {
        focusedInput.value = displayValue;
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        focusedInput.dispatchEvent(inputEvent);
        focusedInput.dispatchEvent(changeEvent);
      }

      onChange?.(displayValue);
      return;
    }

    // Otherwise delete from main input
    const newInput = input.slice(0, -1);
    setInput(newInput);

    // Update the focused input if it exists
    if (focusedInput) {
      focusedInput.value = newInput;
      const inputEvent = new Event("input", { bubbles: true });
      const changeEvent = new Event("change", { bubbles: true });
      focusedInput.dispatchEvent(inputEvent);
      focusedInput.dispatchEvent(changeEvent);
    }

    onChange?.(newInput);
  }, [input, pinyinInput, inputMode, onChange, focusedInput]);

  const handleClear = useCallback(() => {
    setInput("");
    setPinyinInput(""); // Also clear pinyin input

    // Update the focused input if it exists
    if (focusedInput) {
      focusedInput.value = "";
      // Dispatch both input and change events to ensure React components detect the change
      const inputEvent = new Event("input", { bubbles: true });
      const changeEvent = new Event("change", { bubbles: true });
      focusedInput.dispatchEvent(inputEvent);
      focusedInput.dispatchEvent(changeEvent);
    }

    onChange?.("");
    onClear?.();
  }, [onChange, onClear, focusedInput]);

  const handleKeyPress = useCallback(
    (button: string) => {
      switch (button) {
        // Special function keys
        case "{00}":
          addToInput("00");
          break;

        case "{bksp}":
          handleBackspace();
          break;

        case "{confirm}":
          onEnter?.(input);
          break;

        case "{caps}":
          setLayoutName(layoutName === "default" ? "shift" : "default");
          break;

        case "{clear}":
          handleClear();
          break;

        case "{close}":
        case "{hide}":
          onClose?.();
          break;

        case "{123}":
          setLayout("numeric");
          setLayoutName("default");
          break;

        case "{abc}":
          setLayout("default");
          setLayoutName("default");
          break;

        case "{space}":
          addToInput(" ");
          break;

        case "{comma}":
          addToInput(",");
          break;

        case "{dot}":
          addToInput(".");
          break;

        case "{tab}":
          addToInput("\t");
          break;

        case "{enter}":
          onEnter?.(input);
          break;

        case "{next}":
          onNext?.();
          break;

        case "{prev}":
          // Handle previous action
          onPrev?.();
          break;

        case "{globe}":
          handleLanguageToggle();
          break;

        default:
          // Handle number keys for candidate selection in Chinese mode
          if (
            inputMode === "chinese" &&
            pinyinInput &&
            /^[1-9]$/.test(button)
          ) {
            // This will be handled by the ChineseInputMethod component
            // We don't need to do anything here as the component handles number key selection
            break;
          }

          if (button.length === 1) {
            addToInput(button);
          }
          break;
      }
    },
    [
      layoutName,
      input,
      inputMode,
      pinyinInput,
      addToInput,
      handleBackspace,
      handleClear,
      onEnter,
      onClose,
      onNext,
      onPrev,
      handleLanguageToggle,
    ]
  );

  // Handle click events to prevent propagation
  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const handleContainerTouch = useCallback((e: React.TouchEvent) => {
    e.stopPropagation();
    // Note: Can't preventDefault on passive touch events
  }, []);

  return (
    <div
      className={`${styles.virtualKeyboard} ${className} ${styles[layout]}`}
      style={style}
      onClick={handleContainerClick}
      onMouseDown={handleContainerClick}
      onTouchStart={handleContainerTouch}
    >
      {/* Chinese Input Method */}
      <ChineseInputMethod
        pinyinInput={pinyinInput}
        onSelectCandidate={handleChineseCandidateSelect}
        onClearPinyin={handleClearPinyin}
        visible={inputMode === "chinese"}
        className={styles.chineseInputMethod}
      />

      <div className={styles.keyboardContainer}>
        <div className={styles.mainKeyboard}>
          <Keyboard
            layout={layouts[layout as keyof typeof layouts]}
            layoutName={layoutName}
            keyboardRef={(r) => r}
            input={input} // Pass current input value
            display={{
              "{bksp}": renderToString(<Icon name="backspace" />),
              "{enter}": renderToString(<Icon name="enter" />),
              "{caps}": renderToString(<Icon name="capsLock" />),
              "{123}": "123",
              "{tab}": renderToString(<Icon name="tab" />),
              "{space}": " ",
              "{close}": renderToString(<Icon name="close" />),
              "{confirm}": i18n.language === "en" ? "Confirm" : "确认",
              "{comma}": ",",
              "{dot}": ".",
              "{next}": renderToString(<Icon name="next" />),
              "{prev}": renderToString(<Icon name="prev" />),
              // '{globe}': renderToString(<Icon name='globe' />),
              "{hide}": renderToString(<Icon name="hide" />),
              "{abc}": "ABC",
              "{num}": "123",
              "{clear}": "C",
              "{00}": "00",
            }}
            onChange={handleKeyboardChange}
            onKeyPress={handleKeyPress}
            theme="hg-theme-default"
            className={`${styles.keyboard} ${
              layoutName === "shift" ? styles.capsActive : ""
            }`}
          />
        </div>

        <div className={styles.rightButtons}>
          <button
            className={`${styles.rightButton} ${styles.nextButton}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onNext) {
                onNext();
              } else {
                focusInputWithCursorAtEnd(targetInput);
              }
            }}
          >
            <Icon name="next" size={48} />
          </button>
          <button
            className={`${styles.rightButton} ${styles.prevButton}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onPrev) {
                onPrev();
              } else {
                focusInputWithCursorAtEnd(targetInput);
              }
            }}
          >
            <Icon name="prev" size={48} />
          </button>
          <button
            className={`${styles.rightButton} ${styles.globeButton}`}
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageToggle();
            }}
          >
            <span className={styles.globeText}>
              {inputMode === "chinese" ? "中文" : "EN"}
            </span>
          </button>
          <button
            className={`${styles.rightButton} ${styles.hideButton}`}
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
          >
            <Icon name="hide" size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};
