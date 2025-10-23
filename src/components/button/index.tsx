import React from 'react';
import styles from './index.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** 按钮变体：primary | default | secondary | mix | dashed | text | link | danger */
  variant?: 'primary' | 'default' | 'secondary' | 'mix' | 'dashed' | 'text' | 'link' | 'danger';
  /** 颜色主题：cyan（支付等场景）| red（危险操作等场景） */
  color?: 'cyan' | 'red';
  /** 样式类型：outline or not */
  outline?: boolean;
  /** outline 按钮按压时变为 fill 样式 */
  solidOnPressed?: boolean;
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 图标 */
  icon?: React.ReactNode;
  /** 图标位置 */
  iconPosition?: 'left' | 'right';
  /** 是否圆角 */
  rounded?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'default',
      color,
      outline = false,
      solidOnPressed = false,
      size = 'medium',
      icon,
      iconPosition = 'left',
      rounded = false,
      className = '',
      disabled = false,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      // 对于 link 和 text variant，不添加 fill/outline 类名
      variant !== 'link' && variant !== 'text' && styles[`button--${outline ? 'outline' : 'fill'}`],
      color ? styles[`button--color-${color}`] : '',
      variant ? styles[`button--${variant}`] : '',
      solidOnPressed && outline && styles['button--solid-on-pressed'],
      styles[`button--${size}`],
      rounded && styles['button--rounded'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={disabled}
        {...rest}
      >
        {icon && iconPosition === 'left' && (
          <span className={styles.button__icon}>{icon}</span>
        )}
        {children && <span className={styles.button__content}>{children}</span>}
        {icon && iconPosition === 'right' && (
          <span className={styles.button__icon}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> {
  /** 图标（必填） */
  icon: React.ReactNode;
  /** 是否圆角（默认为true） */
  rounded?: boolean;
  /** 可访问标签（用于屏幕阅读器） */
  'aria-label'?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, rounded = true, className = '', 'aria-label': ariaLabel = '', ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        icon={icon}
        rounded={rounded}
        className={`${styles.iconButton} ${className}`}
        aria-label={ariaLabel}
        {...rest}
      />
    );
  }
);

IconButton.displayName = 'IconButton';
