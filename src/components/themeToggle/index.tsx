import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './index.module.scss';

export interface ThemeToggleProps {
  className?: string;
  style?: React.CSSProperties;
  value?: 'light' | 'dark';
  onChange?: (theme: 'light' | 'dark') => void;
  disabled?: boolean;
}

const LightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
  </svg>
);

const DarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  (
    {
      className = '',
      style,
      value,
      onChange,
      disabled = false,
    },
    ref
  ) => {
    // 如果传入了 value 和 onChange，使用受控模式
    // 否则使用 useTheme hook
    const themeContext = useTheme();
    const currentTheme = value !== undefined ? value : themeContext.theme;
    
    const handleToggle = () => {
      if (disabled) return;
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      if (onChange) {
        onChange(newTheme);
      } else {
        themeContext.toggleTheme();
      }
    };

    const isDark = currentTheme === 'dark';

    const buttonClasses = [
      styles.themeToggle,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      styles.label,
      isDark ? styles.dark : styles.light,
    ]
      .filter(Boolean)
      .join(' ');

    const thumbClasses = [
      styles.thumb,
      isDark ? styles.dark : styles.light,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={buttonClasses}
        onClick={handleToggle}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        style={style}
        aria-label={`切换到${isDark ? '浅色' : '深色'}模式`}
      >
        <div className={styles.track}>
          <span className={labelClasses}>
            {isDark ? 'Dark' : 'Light'}
          </span>
          
          <div className={thumbClasses}>
            {isDark ? <DarkIcon /> : <LightIcon />}
          </div>
        </div>
      </button>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
