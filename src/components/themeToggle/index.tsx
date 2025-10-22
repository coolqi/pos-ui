import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './index.module.scss';
import { Icon } from '../icon';

export interface ThemeToggleProps {
  className?: string;
  style?: React.CSSProperties;
  value?: 'light' | 'dark';
  onChange?: (theme: 'light' | 'dark') => void;
  disabled?: boolean;
}

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
            {isDark ? <Icon name='dark' /> : <Icon name='light' />}
          </div>
        </div>
      </button>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
