// 自动导入样式 - 用户无需手动导入
import './styles/index.scss';

// 导出主题相关
export { ThemeProvider, type Theme, type ThemeContextType } from './contexts/ThemeContext';
export { useTheme } from './hooks/useTheme';

// 导出纯组件 - 支持简洁语法导入
export { Button, IconButton, type ButtonProps, type IconButtonProps } from './components/button';
export { default as ThemeToggle, type ThemeToggleProps } from './components/themeToggle';
export { Icon, ICON_NAMES, ALL_ICON_NAMES, SYSTEM_ICON_NAMES, type IconProps } from './components/icon';
export { Toast, type ToastProps, type ToastType, type ToastPosition, toast } from './components/toast';
export { Modal, type ModalProps } from './components/modal';
export { Alert, AlertContainer, alertApi, type AlertProps } from './components/alert';

// 导出业务组件 (Blocks)
export { FunctionCard, type FunctionCardProps } from './blocks/functionCard';
export { VirtualKeyboard, type KeyboardProps, type KeyboardLayout, type InputMode } from './blocks/keyboard';

// 导出类型
export { FUNCTION_CARD_NAME } from './types';

