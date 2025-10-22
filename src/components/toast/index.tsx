import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Icon } from '../icon';

export type ToastType = 'success' | 'warning' | 'info' | 'error';

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 是否显示 */
  visible: boolean;
  /** Toast 类型 */
  type?: ToastType;
  /** 标题（可选） */
  title?: string;
  /** 内容（可选） */
  content?: string;
  /** 是否显示边框 */
  outline?: boolean;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** Toast 位置 */
  position?: ToastPosition;
  /** 自动消失时间（毫秒），0 表示不自动消失 */
  duration?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 关闭回调 */
  onClose?: () => void;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      visible,
      type = 'info',
      title,
      content,
      outline = true,
      showClose = true,
      position = 'top-center',
      duration = 2000,
      className = '',
      style,
      onClose,
      id,
      hidden,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
      setIsVisible(visible);

      if (visible && duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          onClose?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [visible, duration, onClose]);

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    if (!isVisible) return null;

    // 判断是否只有一个内容（只有 title 或只有 content）
    const isSingleContent = (title && !content) || (!title && content);

    const classNames = [
      styles.toast,
      styles[`toast--${type}`],
      !outline && styles['toast--no-outline'],
      isSingleContent && styles['toast--single-content'],
      position && styles[`toast--${position}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={style}
        id={id}
        hidden={hidden}
        {...rest}
      >
        <div className={styles.toast__icon}>
          <Icon name={type ?? 'info'} size={24} />
        </div>
        <div className={styles.toast__content}>
          {title && <div className={styles.toast__title}>{title}</div>}
          {content && <div className={styles.toast__text}>{content}</div>}
        </div>
        {showClose && (
          <button
            className={styles.toast__close}
            onClick={handleClose}
            aria-label="关闭"
          >
            <Icon name='close' />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

