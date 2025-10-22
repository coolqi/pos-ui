import type { Meta, StoryObj } from '@storybook/react';
import { Toast, toast } from './index';
import { useState } from 'react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// 命令式 API 演示
export const ImperativeAPI: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
        <h3>命令式 API - 直接调用</h3>
        <p style={{ color: 'var(--pos-ui-text-secondary)', marginBottom: '16px' }}>
          点击按钮查看 Toast 效果（Toast 会出现在页面右上角）
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            style={{
              padding: '8px 16px',
              border: '1px solid var(--pos-ui-border-color)',
              borderRadius: '6px',
              background: 'var(--pos-ui-danger-color)',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              toast.error('Error title', {
                content: 'Something went wrong',
                duration: 3000,
              });
            }}
          >
            Show Error Toast
          </button>

          <button
            style={{
              padding: '8px 16px',
              border: '1px solid var(--pos-ui-border-color)',
              borderRadius: '6px',
              background: 'var(--pos-ui-success-color)',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              toast.success('Success title', {
                content: 'Operation completed successfully',
                duration: 3000,
              });
            }}
          >
            Show Success Toast
          </button>

          <button
            style={{
              padding: '8px 16px',
              border: '1px solid var(--pos-ui-border-color)',
              borderRadius: '6px',
              background: 'var(--pos-ui-warning-color)',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              toast.warning('Warning title', {
                content: 'Please check your input',
                duration: 3000,
              });
            }}
          >
            Show Warning Toast
          </button>

          <button
            style={{
              padding: '8px 16px',
              border: '1px solid var(--pos-ui-border-color)',
              borderRadius: '6px',
              background: 'var(--pos-ui-primary-color)',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => {
              toast.info('Info title', {
                content: 'This is an information message',
                duration: 3000,
              });
            }}
          >
            Show Info Toast
          </button>
        </div>
      </div>
    );
  },
};

// 组件式 API 演示
export const ComponentAPI: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
        <h3>组件式 API - 声明式使用</h3>
        <p style={{ color: 'var(--pos-ui-text-secondary)', marginBottom: '16px' }}>
          使用 Toast 组件进行声明式渲染
        </p>

        <button
          style={{
            padding: '8px 16px',
            border: '1px solid var(--pos-ui-border-color)',
            borderRadius: '6px',
            background: 'var(--pos-ui-primary-color)',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
          onClick={() => setVisible(!visible)}
        >
          {visible ? 'Hide' : 'Show'} Toast
        </button>

        <Toast
          visible={visible}
          type="info"
          title="Component Toast"
          content="This is a component-based toast"
          onClose={() => setVisible(false)}
        />
      </div>
    );
  },
};