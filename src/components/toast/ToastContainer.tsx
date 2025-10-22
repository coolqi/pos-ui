import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toast, type ToastProps, type ToastType, type ToastPosition } from './index';
import styles from './ToastContainer.module.scss';

interface ToastItem extends Omit<ToastProps, 'visible' | 'onClose'> {
  id: string;
  visible: boolean;
}

interface ToastContainerProps {
  toasts: ToastItem[];
  onRemove: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  // 按位置分组 Toast
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || 'top-center';
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastItem[]>);

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <div 
          key={position}
          className={`${styles.toastContainer} ${styles[`toastContainer--${position}`]}`}
        >
          {positionToasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              visible={toast.visible}
              onClose={() => onRemove(toast.id)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

// Toast 管理器
class ToastManager {
  private toasts: ToastItem[] = [];
  private container: HTMLDivElement | null = null;
  private root: ReactDOM.Root | null = null;
  private listeners: Array<(toasts: ToastItem[]) => void> = [];

  private getContainer() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.setAttribute('data-toast-container', 'true');
      document.body.appendChild(this.container);
      this.root = ReactDOM.createRoot(this.container);
    }
    return this.container;
  }

  private render() {
    this.getContainer();
    this.listeners.forEach((listener) => listener(this.toasts));
    
    if (this.root) {
      this.root.render(
        <ToastContainer
          toasts={this.toasts}
          onRemove={(id) => this.remove(id)}
        />
      );
    }
  }

  private add(toast: Omit<ToastItem, 'id' | 'visible'>) {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastItem = {
      ...toast,
      id,
      visible: true,
    };

    this.toasts.push(newToast);
    this.render();

    return id;
  }

  private remove(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.render();

    // 如果没有 toast 了，清理容器
    if (this.toasts.length === 0 && this.container) {
      setTimeout(() => {
        if (this.toasts.length === 0 && this.container && this.root) {
          this.root.unmount();
          this.container.remove();
          this.container = null;
          this.root = null;
        }
      }, 300);
    }
  }

  // 公共 API
  public show(options: {
    type?: ToastType;
    title?: string;
    content?: string;
    showClose?: boolean;
    position?: ToastPosition;
    duration?: number;
    outline?: boolean;
    style?: React.CSSProperties;
  }) {
    return this.add(options);
  }

  public success(title: string, options?: {
    content?: string;
    showClose?: boolean;
    position?: ToastPosition;
    duration?: number;
    outline?: boolean;
    style?: React.CSSProperties;
  }) {
    return this.add({
      type: 'success',
      title,
      ...options,
    });
  }

  public error(title: string, options?: {
    content?: string;
    showClose?: boolean;
    position?: ToastPosition;
    duration?: number;
    outline?: boolean;
  }) {
    return this.add({
      type: 'error',
      title,
      ...options,
    });
  }

  public warning(title: string, options?: {
    content?: string;
    showClose?: boolean;
    position?: ToastPosition;
    duration?: number;
    outline?: boolean;
  }) {
    return this.add({
      type: 'warning',
      title,
      ...options,
    });
  }

  public info(title: string, options?: {
    content?: string;
    showClose?: boolean;
    position?: ToastPosition;
    duration?: number;
    outline?: boolean;
    style?: React.CSSProperties;
  }) {
    return this.add({
      type: 'info',
      title,
      ...options,
    });
  }

  public dismiss(id: string) {
    this.remove(id);
  }

  public dismissAll() {
    this.toasts = [];
    this.render();
  }
}

// 导出单例
export const toast = new ToastManager();

