// 导出主题相关
export { ThemeProvider, type Theme, type ThemeContextType } from './contexts/ThemeContext';
export { useTheme } from './hooks/useTheme';

// 导出纯组件 - 支持简洁语法导入
export { Button, IconButton, type ButtonProps, type IconButtonProps } from './components/button';
export { default as ThemeToggle, type ThemeToggleProps } from './components/themeToggle';

// 导出业务组件
export { default as UserProfile } from './blocks/userProfile';

// 导出类型
export * from './types';

// 样式导入 - 用户可以选择是否导入
// 方式1: 自动导入（推荐）
import './styles/index.scss';

// 方式2: 用户手动导入
// import 'pos-ui/styles';
