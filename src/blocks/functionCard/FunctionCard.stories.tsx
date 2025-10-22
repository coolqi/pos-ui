import type { Meta, StoryObj } from '@storybook/react';
import { FunctionCard } from './index';
import { FUNCTION_CARD_NAME } from '@/types';

const meta = {
  title: 'Blocks/FunctionCard',
  component: FunctionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(FUNCTION_CARD_NAME),
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FunctionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有功能卡片展示
export const AllVariants: Story = {
  args: {
    name: FUNCTION_CARD_NAME.DINE_IN,
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '20px',
      maxWidth: '1200px'
    }}>
      {/* 大尺寸卡片 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Large Size</h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <FunctionCard 
            name={FUNCTION_CARD_NAME.DINE_IN} 
            title="堂食" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.TOGO} 
            title="外带" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.ADMIN} 
            title="管理" 
            size="lg"
            disabled
            onClick={(name) => console.log('Clicked:', name)}
          />
        </div>
      </div>

      {/* 小尺寸卡片 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Small Size</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '16px',
          maxWidth: '800px'
        }}>
          <FunctionCard 
            name={FUNCTION_CARD_NAME.DINE_IN} 
            title="堂食" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.TOGO} 
            title="外带" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.PICKUP} 
            title="自取" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.DELIVERY} 
            title="外卖" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.RECALL} 
            title="找单" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.OPEN_DRAW} 
            title="钱箱" 
            size="sm"
            onClick={(name) => console.log('Clicked:', name)}
          />
        </div>
      </div>

      {/* 所有功能类型 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>All Function Types</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px'
        }}>
          <FunctionCard 
            name={FUNCTION_CARD_NAME.DINE_IN} 
            title="堂食" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.TOGO} 
            title="外带" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.PICKUP} 
            title="自取" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.DELIVERY} 
            title="外卖" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.RECALL} 
            title="召回" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.OPEN_DRAW} 
            title="开抽屉" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.REPORT} 
            title="报表" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.ADMIN} 
            title="管理" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.BATCH} 
            title="批量" 
            size="lg"
            onClick={(name) => console.log('Clicked:', name)}
          />
        </div>
      </div>
    </div>
  ),
};

// 交互式控制
export const Interactive: Story = {
  args: {
    name: FUNCTION_CARD_NAME.DINE_IN,
    title: '堂食',
    size: 'lg',
    disabled: false,
    onClick: (name) => alert(`点击了: ${name}`),
  },
};
