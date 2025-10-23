import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './index';
import { Button } from '../button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: '是否显示 Modal',
    },
    title: {
      control: 'text',
      description: 'Modal 标题',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Modal 尺寸',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: '点击遮罩层是否关闭',
    },
    showClose: {
      control: 'boolean',
      description: '是否显示关闭按钮',
    },
    showDefaultButtons: {
      control: 'boolean',
      description: '是否显示默认按钮',
    },
    cancelText: {
      control: 'text',
      description: 'Cancel 按钮文本',
    },
    confirmText: {
      control: 'text',
      description: 'Confirm 按钮文本',
    },
    centered: {
      control: 'boolean',
      description: '是否居中显示',
    },
    disableScroll: {
      control: 'boolean',
      description: '是否禁用滚动',
    },
    showOverlay: {
      control: 'boolean',
      description: '是否显示遮罩层',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有变体展示
export const AllVariants: Story = {
  args: {
    open: true,
    children: <p>This is a basic modal with default settings.</p>,
  },
  render: () => {
    const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

    const openModal = (key: string) => {
      setOpenModals(prev => ({ ...prev, [key]: true }));
    };

    const closeModal = (key: string) => {
      setOpenModals(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
        {/* 基础用法 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>基础用法</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openModal('basic')}>Basic Modal</Button>
            <Button onClick={() => openModal('no-title')}>No Title</Button>
            <Button onClick={() => openModal('with-close')}>With Close Button</Button>
          </div>
        </div>

        {/* 不同尺寸 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>不同尺寸</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openModal('small')}>Small</Button>
            <Button onClick={() => openModal('medium')}>Medium</Button>
            <Button onClick={() => openModal('large')}>Large</Button>
          </div>
        </div>

        {/* 自定义内容 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>自定义内容</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openModal('custom-header')}>Custom Header</Button>
            <Button onClick={() => openModal('custom-buttons')}>Custom Buttons</Button>
            <Button onClick={() => openModal('form')}>Form Modal</Button>
          </div>
        </div>

        {/* 交互控制 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>交互控制</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openModal('no-overlay-close')}>No Overlay Close</Button>
            <Button onClick={() => openModal('no-close-button')}>No Close Button</Button>
            <Button onClick={() => openModal('no-scroll')}>No Scroll Disable</Button>
          </div>
        </div>

        {/* Modals */}
        <Modal
          open={openModals.basic}
          title="Basic Modal"
          onClose={() => closeModal('basic')}
          onCancel={() => closeModal('basic')}
          onConfirm={() => {
            alert('Confirmed!');
            closeModal('basic');
          }}
        >
          <p>This is a basic modal with default settings.</p>
          <p>It includes a title, content, and default Cancel/Confirm buttons.</p>
        </Modal>

        <Modal
          open={openModals['no-title']}
          onClose={() => closeModal('no-title')}
          onCancel={() => closeModal('no-title')}
          onConfirm={() => closeModal('no-title')}
        >
          <p>This modal has no title.</p>
        </Modal>

        <Modal
          open={openModals['no-buttons']}
          title="No Buttons"
          showDefaultButtons={false}
          onClose={() => closeModal('no-buttons')}
        >
          <p>This modal has no default buttons.</p>
        </Modal>

        <Modal
          open={openModals.small}
          title="Small Modal"
          size="small"
          onClose={() => closeModal('small')}
          onCancel={() => closeModal('small')}
          onConfirm={() => closeModal('small')}
        >
          <p>This is a small modal (800px width).</p>
        </Modal>

        <Modal
          open={openModals.medium}
          title="Medium Modal"
          size="medium"
          onClose={() => closeModal('medium')}
          onCancel={() => closeModal('medium')}
          onConfirm={() => closeModal('medium')}
        >
          <p>This is a medium modal (1000px width).</p>
        </Modal>

        <Modal
          open={openModals.large}
          title="Large Modal"
          size="large"
          onClose={() => closeModal('large')}
          onCancel={() => closeModal('large')}
          onConfirm={() => closeModal('large')}
        >
          <p>This is a large modal (1200px width).</p>
        </Modal>

        <Modal
          open={openModals['custom-header']}
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
              <span style={{ fontSize: '20px' }}>🚀</span>
              <h3 style={{ margin: 0, flex: 1 }}>Custom Header</h3>
              <Button size="small" outline onClick={() => closeModal('custom-header')}>
                Custom Close
              </Button>
            </div>
          }
          onClose={() => closeModal('custom-header')}
        >
          <p>This modal has a custom header with emoji and custom close button.</p>
        </Modal>

        <Modal
          open={openModals['with-close']}
          title="With Close Button"
          showClose={true}
          onClose={() => closeModal('with-close')}
          onCancel={() => closeModal('with-close')}
          onConfirm={() => closeModal('with-close')}
        >
          <p>This modal has a close button in addition to the default buttons.</p>
        </Modal>

        <Modal
          open={openModals['custom-buttons']}
          title="Custom Buttons"
          cancelText="No Thanks"
          confirmText="Yes, Please"
          onClose={() => closeModal('custom-buttons')}
          onCancel={() => closeModal('custom-buttons')}
          onConfirm={() => {
            alert('Custom confirm action!');
            closeModal('custom-buttons');
          }}
        >
          <p>This modal has custom button text.</p>
        </Modal>

        <Modal
          open={openModals['no-overlay-close']}
          title="No Overlay Close"
          closeOnOverlayClick={false}
          onClose={() => closeModal('no-overlay-close')}
          onCancel={() => closeModal('no-overlay-close')}
          onConfirm={() => closeModal('no-overlay-close')}
        >
          <p>Clicking the overlay will not close this modal.</p>
        </Modal>

        <Modal
          open={openModals['no-close-button']}
          title="No Close Button"
          showClose={false}
          onClose={() => closeModal('no-close-button')}
          onCancel={() => closeModal('no-close-button')}
          onConfirm={() => closeModal('no-close-button')}
        >
          <p>This modal has no close button in the header.</p>
        </Modal>

        <Modal
          open={openModals['no-scroll']}
          title="No Scroll Disable"
          disableScroll={false}
          onClose={() => closeModal('no-scroll')}
          onCancel={() => closeModal('no-scroll')}
          onConfirm={() => closeModal('no-scroll')}
        >
          <p>This modal does not disable page scrolling.</p>
        </Modal>

        <Modal
          open={openModals.form}
          title="Form Modal"
          size="large"
          onClose={() => closeModal('form')}
          onCancel={() => closeModal('form')}
          onConfirm={() => {
            alert('Form submitted!');
            closeModal('form');
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--pos-ui-border-color)',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--pos-ui-border-color)',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
                Message
              </label>
              <textarea
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--pos-ui-border-color)',
                  borderRadius: '4px',
                  fontSize: '14px',
                  minHeight: '80px',
                  resize: 'vertical',
                }}
                placeholder="Enter your message"
              />
            </div>
          </div>
        </Modal>

        <Modal
          open={openModals.list}
          title="List Modal"
          size="medium"
          onClose={() => closeModal('list')}
          onCancel={() => closeModal('list')}
          onConfirm={() => closeModal('list')}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  border: '1px solid var(--pos-ui-border-color)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--pos-ui-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Modal>

        <Modal
          open={openModals.confirmation}
          title="Confirm Action"
          size="small"
          cancelText="Cancel"
          confirmText="Delete"
          onClose={() => closeModal('confirmation')}
          onCancel={() => closeModal('confirmation')}
          onConfirm={() => {
            alert('Item deleted!');
            closeModal('confirmation');
          }}
        >
          <p>Are you sure you want to delete this item?</p>
          <p style={{ color: 'var(--pos-ui-text-secondary)', fontSize: '14px' }}>
            This action cannot be undone.
          </p>
        </Modal>
      </div>
    );
  },
};
