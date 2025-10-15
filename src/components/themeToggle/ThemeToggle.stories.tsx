import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ThemeToggle from './index';
import { ThemeProvider } from '../../contexts/ThemeContext';

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

// 所有变体展示在一页
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

        {/* 禁用状态 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            禁用状态
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <ThemeToggle value="light" disabled />
            <ThemeToggle value="dark" disabled />
          </div>
        </div>

        {/* 自定义样式 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
            自定义样式
          </h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <ThemeToggle 
              className="custom-toggle"
              style={{ 
                border: '2px solid var(--pos-ui-primary-color)',
                borderRadius: '30px'
              }} 
            />
          </div>
        </div>

        {/* 使用说明 */}
        <div style={{ 
          marginTop: '32px', 
          padding: '20px', 
          backgroundColor: 'var(--pos-ui-surface-color)',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <h4 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>使用方式</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <strong>非受控模式：</strong>
              <code style={{ 
                marginLeft: '8px', 
                padding: '2px 6px', 
                backgroundColor: 'var(--pos-ui-background-color)',
                borderRadius: '4px'
              }}>
                &lt;ThemeToggle /&gt;
              </code>
            </div>
            <div>
              <strong>受控模式：</strong>
              <code style={{ 
                marginLeft: '8px', 
                padding: '2px 6px', 
                backgroundColor: 'var(--pos-ui-background-color)',
                borderRadius: '4px'
              }}>
                &lt;ThemeToggle value=&#123;theme&#125; onChange=&#123;setTheme&#125; /&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

// 受控模式示例组件
function ControlledExample() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ThemeToggle value={theme} onChange={setTheme} />
      <div style={{ 
        padding: '12px', 
        backgroundColor: 'var(--pos-ui-surface-color)',
        borderRadius: '6px',
        fontSize: '14px'
      }}>
        当前主题: <strong>{theme}</strong>
      </div>
    </div>
  );
}


