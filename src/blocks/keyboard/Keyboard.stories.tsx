import type { Meta, StoryObj } from '@storybook/react-vite';
import { VirtualKeyboard } from './index';
import { useRef } from 'react';

const meta = {
  title: 'Blocks/VirtualKeyboard',
  component: VirtualKeyboard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VirtualKeyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
        {/* 基础用法 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>基础用法</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <VirtualKeyboard
              targetInput={inputRef.current}
            />
          </div>
        </div>

        {/* 不同布局 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>不同布局</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <VirtualKeyboard
              layout="default"
            />
            <VirtualKeyboard
              layout="numeric"
            />
          </div>
        </div>

        {/* 输入模式 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>输入模式</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <VirtualKeyboard
              inputMode="english"
            />
            <VirtualKeyboard
              inputType="number"
            />
          </div>
        </div>

        {/* 自定义样式 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>自定义样式</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <VirtualKeyboard
              className="custom-keyboard"
              style={{ border: '2px solid #134CEB' }}
              
            />
          </div>
        </div>
      </div>
    );
  },
};

export const Interactive: Story = {
  args: {
    layout: 'default',
    inputMode: 'english',
    inputType: 'text',
  },
};