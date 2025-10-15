import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton } from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例图标
const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

// 所有变体展示
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '20px' }}>
      {/* Fill 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Fill Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" >Primary</Button>
          <Button variant="secondary" >Secondary</Button>
          <Button variant="default" >Default</Button>
          <Button variant="danger" >Danger</Button>
          <Button variant="mix" >Mix</Button>
          <Button variant="primary"  disabled>Disabled</Button>
        </div>
      </div>

      {/* Outline 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Outline Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" outline>Primary</Button>
          <Button variant="secondary" outline>Secondary</Button>
          <Button color='cyan' outline>Cyan</Button>
          <Button variant="default" outline>Default</Button>
          <Button variant="danger" outline>Danger</Button>
          <Button variant="primary" outline disabled>Disabled</Button>
        </div>
      </div>

      {/* Dashed 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Dashed Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="dashed">Dashed Button</Button>
          <Button variant="dashed" icon={<PlusIcon />}>Add Item</Button>
          <Button variant="dashed" disabled>Disabled</Button>
        </div>
      </div>

      {/* Text 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Text Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="text">Text Button</Button>
          <Button variant="text" icon={<HeartIcon />}>With Icon</Button>
          <Button variant="text" disabled>Disabled</Button>
        </div>
      </div>

      {/* Link 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Link Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="link">Link Button</Button>
          <Button variant="link" icon={<HeartIcon />}>With Icon</Button>
          <Button variant="link" disabled>Disabled</Button>
        </div>
      </div>

      {/* 尺寸 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </div>

      {/* Rounded 圆角 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Rounded Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" rounded>Primary</Button>
          <Button variant="secondary" rounded>Secondary</Button>
          <Button variant="danger" rounded>Danger</Button>
          <Button variant="primary" outline rounded>Outline</Button>
          <Button variant="dashed" rounded>Dashed</Button>
        </div>
      </div>

      {/* 颜色主题 - Cyan */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Color Theme - Cyan</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Fill</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button color="cyan">立即支付</Button>
              <Button color="cyan" size="small">立即支付</Button>
              <Button color="cyan" size="large">立即支付</Button>
              <Button color="cyan" icon={<HeartIcon />}>支付订单</Button>
              <Button color="cyan" disabled>已支付</Button>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Outline</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button color="cyan" outline>取消支付</Button>
              <Button color="cyan" outline size="small">取消支付</Button>
              <Button color="cyan" outline size="large">取消支付</Button>
              <Button color="cyan" outline disabled>已取消</Button>
            </div>
          </div>
        </div>
      </div>

      {/* 带图标的按钮 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" icon={<HeartIcon />} iconPosition="left">Like</Button>
          <Button variant="default" icon={<SearchIcon />} iconPosition="left">Search</Button>
          <Button variant="secondary" icon={<PlusIcon />} iconPosition="left">Add</Button>
          <Button variant="danger" icon={<TrashIcon />} iconPosition="left">Delete</Button>
          <Button variant="primary" outline icon={<PlusIcon />} iconPosition="right">Add New</Button>
          <Button variant="primary" rounded icon={<HeartIcon />} iconPosition="left">Rounded</Button>
        </div>
      </div>

      {/* IconButton */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Icon Buttons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Fill */}
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Fill (Rounded)</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <IconButton icon={<HeartIcon />} variant="primary" size="small" aria-label="Like" />
              <IconButton icon={<SearchIcon />} variant="primary" size="medium" aria-label="Search" />
              <IconButton icon={<PlusIcon />} variant="primary" size="large" aria-label="Add" />
              <IconButton icon={<HeartIcon />} variant="default" size="medium" aria-label="Like" />
              <IconButton icon={<SearchIcon />} variant="secondary" size="medium" aria-label="Search" />
              <IconButton icon={<TrashIcon />} variant="danger" size="medium" aria-label="Delete" />
              <IconButton icon={<PlusIcon />} variant="primary" size="medium" disabled aria-label="Add" />
            </div>
          </div>
          
          {/* Outline */}
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Outline (Rounded)</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <IconButton icon={<HeartIcon />} variant="primary" outline size="small" aria-label="Like" />
              <IconButton icon={<SearchIcon />} variant="primary" outline size="medium" aria-label="Search" />
              <IconButton icon={<PlusIcon />} variant="primary" outline size="large" aria-label="Add" />
              <IconButton icon={<HeartIcon />} variant="default" outline size="medium" aria-label="Like" />
              <IconButton icon={<SearchIcon />} variant="secondary" outline size="medium" aria-label="Search" />
              <IconButton icon={<TrashIcon />} variant="danger" outline size="medium" aria-label="Delete" />
            </div>
          </div>

          {/* Square Icons */}
          <div>
            <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Square (Not Rounded)</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <IconButton icon={<HeartIcon />} variant="primary" size="medium" rounded={false} aria-label="Like" />
              <IconButton icon={<SearchIcon />} variant="default" size="medium" rounded={false} aria-label="Search" />
              <IconButton icon={<TrashIcon />} variant="danger" size="medium" rounded={false} aria-label="Delete" />
              <IconButton icon={<PlusIcon />} variant="secondary" outline size="medium" rounded={false} aria-label="Add" />
            </div>
          </div>
        </div>
      </div>

      {/* 自定义样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Custom Styling</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button 
            variant="primary" 
            className="custom-class"
            style={{ borderRadius: '20px', padding: '12px 32px' }}
          >
            Custom Style
          </Button>
          <IconButton 
            icon={<HeartIcon />} 
            variant="secondary"
            style={{ width: '60px', height: '60px', fontSize: '20px' }}
            aria-label="Like"
          />
        </div>
      </div>
    </div>
  ),
};