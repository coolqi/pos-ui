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
    <path d="M12 5v14m-7-7h14"></path>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="default">Default</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="mix">Mix</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Outline 样式 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Outline Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" outline>Primary</Button>
          <Button variant="secondary" outline>Secondary</Button>
          <Button variant="default" outline>Default</Button>
          <Button variant="danger" outline>Danger</Button>
          <Button variant="mix" outline>Mix</Button>
          <Button variant="primary" outline disabled>Disabled</Button>
        </div>
      </div>

      {/* 尺寸 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </div>

      {/* 圆角按钮 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Rounded Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" rounded>Primary</Button>
          <Button variant="secondary" rounded>Secondary</Button>
          <Button variant="default" rounded>Default</Button>
          <Button variant="danger" rounded>Danger</Button>
        </div>
      </div>

      {/* 带图标的按钮 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" icon={<HeartIcon />}>Like</Button>
          <Button variant="secondary" icon={<SearchIcon />}>Search</Button>
          <Button variant="default" icon={<PlusIcon />}>Add</Button>
          <Button variant="danger" icon={<TrashIcon />}>Delete</Button>
        </div>
      </div>

      {/* 图标按钮 */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Icon Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <IconButton variant="primary" icon={<HeartIcon />} aria-label="Like" />
          <IconButton variant="secondary" icon={<SearchIcon />} aria-label="Search" />
          <IconButton variant="default" icon={<PlusIcon />} aria-label="Add" />
          <IconButton variant="danger" icon={<TrashIcon />} aria-label="Delete" />
        </div>
      </div>

      {/* 颜色主题 - Cyan */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Color Theme - Cyan</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button color="cyan">Cyan Fill</Button>
          <Button color="cyan" outline>Cyan Outline</Button>
          <Button color="cyan" rounded>Cyan Rounded</Button>
        </div>
      </div>

      {/* Outline - Solid on Pressed */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>Outline - Solid on Pressed</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" outline solidOnPressed>Primary</Button>
          <Button variant="secondary" outline solidOnPressed>Secondary</Button>
          <Button variant="default" outline solidOnPressed>Default</Button>
          <Button variant="danger" outline solidOnPressed>Danger</Button>
          <Button color="cyan" outline solidOnPressed>Cyan</Button>
        </div>
      </div>
    </div>
  ),
};

// 交互式控制
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    outline: false,
    rounded: false,
    disabled: false,
    children: 'Button',
  },
};