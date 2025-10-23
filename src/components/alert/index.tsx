import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "../button";
import { Icon } from "../icon";
import styles from "./index.module.scss";

export interface AlertProps {
  /** 是否显示 Alert */
  open?: boolean;
  /** Alert 标题 */
  title?: string;
  /** Alert 内容 */
  content?: string;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 是否显示遮罩层 */
  showOverlay?: boolean;
  /** Alert 状态 */
  status?: "error" | "info" | "success" | "warning" | "basic";
  /** Alert 类型 */
  type?: "default" | "confirm";
  /** 自定义底部内容 */
  footer?: React.ReactNode;
  /** 是否隐藏底部 */
  hideFooter?: boolean;
  /** 确认按钮文本 */
  confirmText?: string;
  /** 取消按钮文本 */
  cancelText?: string;
  /** 确认按钮点击事件 */
  onConfirm?: () => void;
  /** 取消按钮点击事件 */
  onCancel?: () => void;
  /** 关闭事件 */
  onClose?: () => void;
  /** Alert 尺寸 */
  size?: "small" | "medium" | "large";
  /** 是否居中显示 */
  centered?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 元素 ID */
  id?: string;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  open,
  title,
  content,
  showClose = true,
  showOverlay = true,
  status = "basic",
  type = "default",
  footer,
  hideFooter = false,
  confirmText = "OK",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  onClose,
  size = "medium",
  centered = true,
  className = "",
  style,
  id,
}) => {
  const alertRef = useRef<HTMLDivElement>(null);
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
      document.body.style.overflow = "hidden";

      // 将焦点移到 Alert
      if (alertRef.current) {
        alertRef.current.focus();
      }

      return () => {
        // 恢复页面滚动
        document.body.style.overflow = "";

        // 恢复焦点
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [open]);

  // 处理遮罩层点击
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (showOverlay && event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  // 处理确认按钮点击
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else if (onClose) {
      onClose();
    }
  };

  // 处理取消按钮点击
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else if (onClose) {
      onClose();
    }
  };


  if (!open) {
    return null;
  }

  const alertClassNames = [
    styles.alert,
    styles[`alert--${size}`],
    styles[`alert--${status}`],
    centered && styles["alert--centered"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overlayClassNames = [styles.overlay].filter(Boolean).join(" ");

  const alertContent = (
    <div className={overlayClassNames} onClick={handleOverlayClick}>
      <div
        ref={alertRef}
        className={alertClassNames}
        style={style}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={title ? "alert-title" : undefined}
        tabIndex={-1}
        id={id}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            {status !== "basic" && (
              <div className={styles.statusIcon}>
                <Icon name={status} size={24} />
              </div>
            )}
            {title && (
              <h3 id="alert-title" className={styles.title}>
                {title}
              </h3>
            )}
          </div>
          {showClose && (
            <Button
              variant="link"
              size="small"
              onClick={onClose}
              aria-label="Close modal"
              style={{ color: 'var(--pos-ui-text-primary)' }}
            >
              <Icon name="close" size={22} />
            </Button>
          )}
        </div>

        {/* Content */}
        {content && <div className={styles.content}>{content}</div>}

        {/* Footer */}
        {!hideFooter && (
          <div className={styles.footer}>
            {footer ? (
              footer
            ) : (
              <div className={styles.defaultButtons}>
                {type === "confirm" && (
                  <Button
                    variant="danger"
                    outline
                    size="small"
                    onClick={handleCancel}
                  >
                    {cancelText}
                  </Button>
                )}
                <Button variant="primary" size="small" onClick={handleConfirm}>
                  {confirmText}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(alertContent, document.body);
};

Alert.displayName = "Alert";

// Alert 管理器
class AlertManager {
  private alerts: Array<{
    id: string;
    props: AlertProps;
  }> = [];
  public container: HTMLElement | null = null;
  private listeners: Array<() => void> = [];

  constructor() {
    this.createContainer();
  }

  createContainer() {
    if (typeof document === "undefined") return;

    // 如果容器已存在，直接返回
    if (this.container) return;

    this.container = document.createElement("div");
    this.container.id = "alert-container";
    this.container.style.position = "fixed";
    this.container.style.top = "0";
    this.container.style.left = "0";
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.pointerEvents = "none";
    this.container.style.zIndex = "9999";
    document.body.appendChild(this.container);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  show(props: AlertProps): string {
    const id = Math.random().toString(36).substr(2, 9);
    const alertProps = {
      ...props,
      open: true,
      onClose: () => {
        this.close(id);
        props.onClose?.();
      },
      onConfirm: () => {
        this.close(id);
        props.onConfirm?.();
      },
      onCancel: () => {
        this.close(id);
        props.onCancel?.();
      },
    };

    this.alerts.push({ id, props: alertProps });
    this.notifyListeners();
    return id;
  }

  close(id: string) {
    this.alerts = this.alerts.filter((alert) => alert.id !== id);
    this.notifyListeners();
  }

  closeAll() {
    this.alerts = [];
    this.notifyListeners();
  }

  getAlerts() {
    return this.alerts;
  }
}

// 全局 Alert 管理器实例
const alertManager = new AlertManager();

// Alert 容器组件
export const AlertContainer: React.FC = () => {
  const [alerts, setAlerts] = React.useState(alertManager.getAlerts());
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    // 确保容器存在
    if (!alertManager.container) {
      alertManager.createContainer();
    }
    setContainer(alertManager.container);

    const unsubscribe = alertManager.subscribe(() => {
      setAlerts(alertManager.getAlerts());
    });

    return unsubscribe;
  }, []);

  // 如果没有容器，返回 null
  if (!container) {
    return null;
  }

  return createPortal(
    <>
      {alerts.map(({ id, props }) => (
        <Alert key={id} {...props} />
      ))}
    </>,
    container
  );
};

// 命令式 API
export const alertApi = {
  show: (titleOrOptions: string | AlertProps, options?: AlertProps): string => {
    if (typeof titleOrOptions === "string") {
      return alertManager.show({
        title: titleOrOptions,
        open: true,
        ...options
      });
    } else {
      return alertManager.show({
        open: true,
        ...titleOrOptions,
      });
    }
  },

  error: (
    title: string,
    options?: Omit<AlertProps, "title" | "status">
  ): string => {
    return alertManager.show({
      title,
      status: "error",
      open: true,
      ...options,
    });
  },

  info: (
    title: string,
    options?: Omit<AlertProps, "title" | "status">
  ): string => {
    return alertManager.show({
      title,
      status: "info",
      open: true,
      ...options,
    });
  },

  success: (
    title: string,
    options?: Omit<AlertProps, "title" | "status">
  ): string => {
    return alertManager.show({
      title,
      status: "success",
      open: true,
      ...options,
    });
  },

  warning: (
    title: string,
    options?: Omit<AlertProps, "title" | "status">
  ): string => {
    return alertManager.show({
      title,
      status: "warning",
      open: true,
      ...options,
    });
  },

  confirm: (
    title: string,
    options?: Omit<AlertProps, "title" | "type">
  ): string => {
    return alertManager.show({
      title,
      type: "confirm",
      open: true,
      ...options,
    });
  },

  close: (id: string) => {
    alertManager.close(id);
  },

  closeAll: () => {
    alertManager.closeAll();
  },
};
