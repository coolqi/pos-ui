import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './index';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { useState } from 'react';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// 受控模式示例组件
const ControlledExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontSize: '14px', color: 'var(--pos-ui-text-secondary)' }}>
        当前主题: {theme}
      </p>
      <ThemeToggle 
        value={theme} 
        onChange={setTheme}
      />
    </div>
  );
};

// 所有变体展示
export const AllVariants: Story = {
  render: () => (
    <ThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '20px' }}>
        {/* 非受控模式 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            非受控模式（使用 useTheme）
          </h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--pos-ui-text-secondary)' }}>
            组件内部自动连接到 ThemeContext，点击切换全局主题
          </p>
          <ThemeToggle />
        </div>

        {/* 受控模式 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            受控模式（通过 props）
          </h3>
          <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--pos-ui-text-secondary)' }}>
            通过 value 和 onChange props 控制主题状态
          </p>
          <ControlledExample />
        </div>

        {/* 不同尺寸 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            不同尺寸
          </h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ThemeToggle size="small" />
              <span style={{ fontSize: '12px' }}>Small</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ThemeToggle size="medium" />
              <span style={{ fontSize: '12px' }}>Medium</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ThemeToggle size="large" />
              <span style={{ fontSize: '12px' }}>Large</span>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// 交互式控制
export const Interactive: Story = {
  render: () => (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          主题切换器
        </h3>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--pos-ui-text-secondary)' }}>
          点击切换全局主题
        </p>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  ),
};