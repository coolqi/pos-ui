import type { Meta, StoryObj } from '@storybook/react';
import { Icon, ICON_NAMES } from './index';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有图标展示
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '20px', maxWidth: '1200px' }}>
      {/* 所有图标 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>All Icons</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
          gap: '16px' 
        }}>
          {ICON_NAMES.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                border: '1px solid var(--pos-ui-border-color)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--pos-ui-primary-color)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--pos-ui-border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon name={name} size={24} />
              <span style={{ fontSize: '12px', textAlign: 'center', wordBreak: 'break-word' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 不同尺寸 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={16} />
            <span style={{ fontSize: '12px' }}>16px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={20} />
            <span style={{ fontSize: '12px' }}>20px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={24} />
            <span style={{ fontSize: '12px' }}>24px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} />
            <span style={{ fontSize: '12px' }}>32px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={48} />
            <span style={{ fontSize: '12px' }}>48px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={64} />
            <span style={{ fontSize: '12px' }}>64px</span>
          </div>
        </div>
      </div>

      {/* 不同颜色 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Colors</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="var(--pos-ui-primary-color)" />
            <span style={{ fontSize: '12px' }}>Primary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="var(--pos-ui-danger-color)" />
            <span style={{ fontSize: '12px' }}>Danger</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="var(--pos-ui-success-color)" />
            <span style={{ fontSize: '12px' }}>Success</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="var(--pos-ui-warning-color)" />
            <span style={{ fontSize: '12px' }}>Warning</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="#13c2c2" />
            <span style={{ fontSize: '12px' }}>Cyan</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Icon name="heart" size={32} color="#666" />
            <span style={{ fontSize: '12px' }}>Gray</span>
          </div>
        </div>
      </div>

      {/* 旋转动画 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Spin Animation</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Icon name="loading" size={32} spin />
          <Icon name="refresh" size={32} spin />
          <Icon name="settings" size={32} spin />
        </div>
      </div>

      {/* 在按钮中使用 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>In Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px',
            border: '1px solid var(--pos-ui-border-color)',
            borderRadius: '6px',
            background: 'transparent',
            cursor: 'pointer',
          }}>
            <Icon name="heart" size={16} />
            Like
          </button>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px',
            border: '1px solid var(--pos-ui-border-color)',
            borderRadius: '6px',
            background: 'transparent',
            cursor: 'pointer',
          }}>
            <Icon name="search" size={16} />
            Search
          </button>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: 'var(--pos-ui-primary-color)',
            color: '#fff',
            cursor: 'pointer',
          }}>
            <Icon name="plus" size={16} />
            Add New
          </button>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: 'var(--pos-ui-danger-color)',
            color: '#fff',
            cursor: 'pointer',
          }}>
            <Icon name="trash" size={16} />
            Delete
          </button>
        </div>
      </div>

      {/* 自定义样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Custom Styling</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Icon 
            name="star" 
            size={48} 
            color="#ffa500"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(255, 165, 0, 0.5))' }}
          />
          <Icon 
            name="heart" 
            size={48} 
            color="#ff4757"
            className="custom-icon"
            style={{ 
              filter: 'drop-shadow(0 2px 4px rgba(255, 71, 87, 0.5))',
              transform: 'scale(1.1)',
            }}
          />
        </div>
      </div>
    </div>
  ),
};

