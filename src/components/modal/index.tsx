import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button, IconButton } from "../button";
import styles from "./index.module.scss";
import { Icon } from "../icon";

export interface ModalProps {
  /** 是否显示 Modal */
  open: boolean;
  /** Modal 标题 */
  title?: string;
  /** Modal 内容 */
  children: React.ReactNode;
  /** 点击遮罩层是否关闭 Modal */
  closeOnOverlayClick?: boolean;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 自定义头部内容 */
  header?: React.ReactNode;
  /** 自定义底部内容 */
  footer?: React.ReactNode;
  /** 是否显示默认的 Cancel 和 Confirm 按钮 */
  showDefaultButtons?: boolean;
  /** Cancel 按钮文本 */
  cancelText?: string;
  /** Confirm 按钮文本 */
  confirmText?: string;
  /** Cancel 按钮点击事件 */
  onCancel?: () => void;
  /** Confirm 按钮点击事件 */
  onConfirm?: () => void;
  /** 关闭事件 */
  onClose?: () => void;
  /** Modal 尺寸 */
  size?: "small" | "medium" | "large";
  /** 是否居中显示 */
  centered?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 头部自定义类名 */
  headerClassName?: string;
  /** 内容自定义类名 */
  contentClassName?: string;
  /** 底部自定义类名 */
  footerClassName?: string;
  /** 是否禁用滚动 */
  disableScroll?: boolean;
  /** 是否显示遮罩层 */
  showOverlay?: boolean;
  /** 遮罩层自定义类名 */
  overlayClassName?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  closeOnOverlayClick = true,
  showClose = false,
  header,
  footer,
  showDefaultButtons = true,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onCancel,
  onConfirm,
  onClose,
  size = "medium",
  centered = true,
  className = "",
  style,
  headerClassName = "",
  contentClassName = "",
  footerClassName = "",
  disableScroll = true,
  showOverlay = true,
  overlayClassName = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // 处理 ESC 键关闭
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, onClose]);

  // 处理焦点管理
  useEffect(() => {
    if (open) {
      // 保存当前焦点元素
      previousActiveElement.current = document.activeElement as HTMLElement;

      // 禁用页面滚动
      if (disableScroll) {
        document.body.style.overflow = "hidden";
      }

      // 将焦点移到 Modal
      if (modalRef.current) {
        modalRef.current.focus();
      }

      return () => {
        // 恢复页面滚动
        if (disableScroll) {
          document.body.style.overflow = "";
        }

        // 恢复焦点
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [open, disableScroll]);

  // 处理遮罩层点击
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (
      closeOnOverlayClick &&
      event.target === event.currentTarget &&
      onClose
    ) {
      onClose();
    }
  };

  // 处理 Cancel 按钮点击
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else if (onClose) {
      onClose();
    }
  };

  // 处理 Confirm 按钮点击
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  if (!open) {
    return null;
  }

  const modalClassNames = [
    styles.modal,
    styles[`modal--${size}`],
    centered && styles["modal--centered"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overlayClassNames = [styles.overlay, overlayClassName]
    .filter(Boolean)
    .join(" ");

  const headerClassNames = [styles.header, headerClassName]
    .filter(Boolean)
    .join(" ");

  const contentClassNames = [styles.content, contentClassName]
    .filter(Boolean)
    .join(" ");

  const footerClassNames = [styles.footer, footerClassName]
    .filter(Boolean)
    .join(" ");

  const modalContent = showOverlay ? (
    <div className={overlayClassNames} onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={modalClassNames}
        style={style}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
      >
        {/* Header */}
        {(title || header || showClose || showDefaultButtons) && (
          <div className={headerClassNames}>
            {header ? (
              header
            ) : (
              <>
                <div className={styles.headerLeft}>
                  {showDefaultButtons && (
                    <Button
                      variant="link"
                      size="large"
                      onClick={handleCancel}
                      style={{ color: "var(--pos-ui-text-primary)" }}
                    >
                      {cancelText}
                    </Button>
                  )}
                </div>
                <div className={styles.headerCenter}>
                  {title && (
                    <h3 id="modal-title" className={styles.title}>
                      {title}
                    </h3>
                  )}
                </div>
                <div className={styles.headerRight}>
                  {showDefaultButtons && (
                    <Button
                      variant="primary"
                      size="large"
                      onClick={handleConfirm}
                    >
                      {confirmText}
                    </Button>
                  )}
                  {showClose && (
                    <IconButton
                      variant="text"
                      rounded={false}
                      icon={<Icon name="close" size={24} />}
                      onClick={onClose}
                      aria-label="Close modal"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className={contentClassNames}>{children}</div>

        {/* Footer */}
        {footer && <div className={footerClassNames}>{footer}</div>}
      </div>
    </div>
  ) : (
    <div
      ref={modalRef}
      className={modalClassNames}
      style={style}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      tabIndex={-1}
    >
      {/* Header */}
      {(title || header || showClose || showDefaultButtons) && (
        <div className={headerClassNames}>
          {header ? (
            header
          ) : (
            <>
              <div className={styles.headerLeft}>
                {showDefaultButtons && (
                  <Button
                    variant="link"
                    size="large"
                    onClick={handleCancel}
                    style={{ color: "var(--pos-ui-text-primary)" }}
                  >
                    {cancelText}
                  </Button>
                )}
              </div>
              <div className={styles.headerCenter}>
                {title && (
                  <h3 id="modal-title" className={styles.title}>
                    {title}
                  </h3>
                )}
              </div>
              <div className={styles.headerRight}>
                {showDefaultButtons && (
                  <Button
                    variant="primary"
                    size="large"
                    onClick={handleConfirm}
                  >
                    {confirmText}
                  </Button>
                )}
                {showClose && (
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="4" x2="4" y2="12" />
                      <line x1="4" y1="4" x2="12" y2="12" />
                    </svg>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className={contentClassNames}>{children}</div>

      {/* Footer */}
      {footer && <div className={footerClassNames}>{footer}</div>}
    </div>
  );

  return createPortal(modalContent, document.body);
};

Modal.displayName = "Modal";
