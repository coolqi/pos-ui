// 自动导入样式 - 用户无需手动导入
import './styles/index.scss';

// 导出主题相关
export { ThemeProvider, type Theme, type ThemeContextType } from './contexts/ThemeContext';
export { useTheme } from './hooks/useTheme';

// 导出纯组件 - 支持简洁语法导入
export { Button, IconButton, type ButtonProps, type IconButtonProps } from './components/button';
export { default as ThemeToggle, type ThemeToggleProps } from './components/themeToggle';
export { Icon, ICON_NAMES, type IconProps } from './components/icon';

// 导出业务组件
export { default as UserProfile } from './blocks/userProfile';
