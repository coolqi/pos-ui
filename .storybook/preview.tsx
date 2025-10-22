import { Preview } from '@storybook/react-vite';
import React from 'react';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { useTheme } from '../src/hooks/useTheme';
import ThemeToggle from '../src/components/themeToggle';
import '../src/styles/index.scss';

// 创建一个包装组件来使用 useTheme
const ThemeToggleWrapper = () => {
  const { theme, toggleTheme } = useTheme();
  return <ThemeToggle value={theme} onChange={toggleTheme} />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
      config: {
        rules: [
          {
            // 禁用颜色对比度检查（按照设计稿）
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },

    layout: 'centered',

    // 设置故事排序和默认页面
    options: {
      storySort: {
        order: [
          'Components', 
          ['Icon', 'Button', 'ThemeToggle'], // Icon 排在第一个
          'Blocks',
          ['FunctionCard'] // FunctionCard 排在 Blocks 第一个
        ],
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" enableLocalStorage={true}>
        <div style={{
          maxWidth: '100vw',
          minHeight: '100vh',
          backgroundColor: 'var(--pos-ui-bg-color)',
          color: 'var(--pos-ui-text-primary)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}>
          {/* 全局主题切换按钮 */}
          <div style={{
            position: 'fixed',
            top: '16px',
            right: '16px',
            zIndex: 1000,
          }}>
            <ThemeToggleWrapper />
          </div>
          
          {/* Story 内容 */}
          <div style={{ paddingTop: '20px' }}>
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;