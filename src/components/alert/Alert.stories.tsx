import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Alert, AlertContainer, alertApi } from './index';
import { Button } from '../button';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <AlertContainer />
      </>
    ),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      description: '是否显示 Alert',
    },
    title: {
      control: 'text',
      description: 'Alert 标题',
    },
    content: {
      control: 'text',
      description: 'Alert 内容',
    },
    status: {
      control: 'select',
      options: ['error', 'info', 'success', 'warning', 'basic'],
      description: 'Alert 状态',
    },
    type: {
      control: 'select',
      options: ['default', 'confirm'],
      description: 'Alert 类型',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Alert 尺寸',
    },
    showClose: {
      control: 'boolean',
      description: '是否显示关闭按钮',
    },
    showOverlay: {
      control: 'boolean',
      description: '是否显示遮罩层',
    },
    hideFooter: {
      control: 'boolean',
      description: '是否隐藏底部',
    },
    confirmText: {
      control: 'text',
      description: '确认按钮文本',
    },
    cancelText: {
      control: 'text',
      description: '取消按钮文本',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// 所有变体展示
export const AllVariants: Story = {
  render: () => {
    const [openAlerts, setOpenAlerts] = useState<Record<string, boolean>>({});

    const openAlert = (key: string) => {
      setOpenAlerts(prev => ({ ...prev, [key]: true }));
    };

    const closeAlert = (key: string) => {
      setOpenAlerts(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '20px' }}>
        {/* 基础 Alert */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>基础 Alert</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('basic')}>Basic Alert</Button>
            <Button onClick={() => openAlert('basic-no-title')}>No Title</Button>
            <Button onClick={() => openAlert('basic-no-content')}>No Content</Button>
          </div>
        </div>

        {/* 不同状态 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>不同状态</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('error')}>Error Alert</Button>
            <Button onClick={() => openAlert('info')}>Info Alert</Button>
            <Button onClick={() => openAlert('success')}>Success Alert</Button>
            <Button onClick={() => openAlert('warning')}>Warning Alert</Button>
          </div>
        </div>

        {/* 不同尺寸 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>不同尺寸</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('small')}>Small Alert</Button>
            <Button onClick={() => openAlert('medium')}>Medium Alert</Button>
            <Button onClick={() => openAlert('large')}>Large Alert</Button>
          </div>
        </div>

        {/* 不同类型 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>不同类型</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('default')}>Default Type</Button>
            <Button onClick={() => openAlert('confirm')}>Confirm Type</Button>
          </div>
        </div>

        {/* 自定义控制 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>自定义控制</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('no-close')}>No Close Button</Button>
            <Button onClick={() => openAlert('no-overlay')}>No Overlay</Button>
            <Button onClick={() => openAlert('no-footer')}>No Footer</Button>
            <Button onClick={() => openAlert('custom-footer')}>Custom Footer</Button>
          </div>
        </div>

        {/* 自定义位置 */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>自定义位置</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => openAlert('top-left')}>Top Left</Button>
            <Button onClick={() => openAlert('top-right')}>Top Right</Button>
            <Button onClick={() => openAlert('bottom-left')}>Bottom Left</Button>
            <Button onClick={() => openAlert('bottom-right')}>Bottom Right</Button>
            <Button onClick={() => openAlert('center')}>Center (Default)</Button>
            <Button onClick={() => openAlert('modal-style')}>Modal Style</Button>
          </div>
        </div>

        {/* 命令式 API */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>命令式 API</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => alertApi.info('Basic Alert', { content: 'This is a basic alert.' })}>
              Basic Alert
            </Button>
            <Button onClick={() => alertApi.error('Error Alert', { content: 'Something went wrong!' })}>
              Error Alert
            </Button>
            <Button onClick={() => alertApi.success('Success Alert', { content: 'Operation completed!' })}>
              Success Alert
            </Button>
            <Button onClick={() => alertApi.confirm('Confirm Action', { content: 'Are you sure?' })}>
              Confirm Alert
            </Button>
          </div>
        </div>

        {/* Alerts */}
        <Alert
          open={openAlerts.basic}
          title="Basic Alert"
          content="This is a basic alert with default settings."
          onClose={() => closeAlert('basic')}
          onConfirm={() => closeAlert('basic')}
        />

        <Alert
          open={openAlerts['basic-no-title']}
          content="This alert has no title, only content."
          onClose={() => closeAlert('basic-no-title')}
          onConfirm={() => closeAlert('basic-no-title')}
        />

        <Alert
          open={openAlerts['basic-no-content']}
          title="Title Only"
          onClose={() => closeAlert('basic-no-content')}
          onConfirm={() => closeAlert('basic-no-content')}
        />

        <Alert
          open={openAlerts.error}
          title="Error Alert"
          content="Something went wrong. Please try again."
          status="error"
          onClose={() => closeAlert('error')}
          onConfirm={() => closeAlert('error')}
        />

        <Alert
          open={openAlerts.info}
          title="Info Alert"
          content="Here is some important information for you."
          status="info"
          onClose={() => closeAlert('info')}
          onConfirm={() => closeAlert('info')}
        />

        <Alert
          open={openAlerts.success}
          title="Success Alert"
          content="Your operation has been completed successfully."
          status="success"
          onClose={() => closeAlert('success')}
          onConfirm={() => closeAlert('success')}
        />

        <Alert
          open={openAlerts.warning}
          title="Warning Alert"
          content="Please check your input before proceeding."
          status="warning"
          onClose={() => closeAlert('warning')}
          onConfirm={() => closeAlert('warning')}
        />

        <Alert
          open={openAlerts.small}
          title="Small Alert"
          content="This is a small alert."
          size="small"
          onClose={() => closeAlert('small')}
          onConfirm={() => closeAlert('small')}
        />

        <Alert
          open={openAlerts.medium}
          title="Medium Alert"
          content="This is a medium alert."
          size="medium"
          onClose={() => closeAlert('medium')}
          onConfirm={() => closeAlert('medium')}
        />

        <Alert
          open={openAlerts.large}
          title="Large Alert"
          content="This is a large alert with more content to demonstrate the larger size."
          size="large"
          onClose={() => closeAlert('large')}
          onConfirm={() => closeAlert('large')}
        />

        <Alert
          open={openAlerts.default}
          title="Default Type"
          content="This is a default type alert with OK button."
          type="default"
          onClose={() => closeAlert('default')}
          onConfirm={() => closeAlert('default')}
        />

        <Alert
          open={openAlerts.confirm}
          title="Confirm Action"
          content="Are you sure you want to proceed with this action?"
          type="confirm"
          confirmText="Confirm"
          cancelText="Cancel"
          onClose={() => closeAlert('confirm')}
          onCancel={() => closeAlert('confirm')}
          onConfirm={() => {
            alertApi.confirm('Action confirmed!');
          }}
        />

        <Alert
          open={openAlerts['no-close']}
          title="No Close Button"
          content="This alert has no close button in the header."
          showClose={false}
          onConfirm={() => closeAlert('no-close')}
        />

        <Alert
          open={openAlerts['no-overlay']}
          title="No Overlay"
          content="This alert has no overlay background."
          showOverlay={false}
          onClose={() => closeAlert('no-overlay')}
          onConfirm={() => closeAlert('no-overlay')}
        />

        <Alert
          open={openAlerts['no-footer']}
          title="No Footer"
          content="This alert has no footer buttons."
          hideFooter={true}
          onClose={() => closeAlert('no-footer')}
        />

        <Alert
          open={openAlerts['custom-footer']}
          title="Custom Footer"
          content="This alert has a custom footer."
          footer={
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
              <Button variant="secondary" size="small" onClick={() => closeAlert('custom-footer')}>
                Secondary Action
              </Button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button outline size="small" onClick={() => closeAlert('custom-footer')}>
                  Cancel
                </Button>
                <Button variant="primary" size="small" onClick={() => closeAlert('custom-footer')}>
                  Save
                </Button>
              </div>
            </div>
          }
          onClose={() => closeAlert('custom-footer')}
        />

        <Alert
          open={openAlerts['top-left']}
          title="Top Left"
          content="This alert is positioned at the top left."
          style={{ position: 'fixed', top: '20px', left: '20px', margin: '0' }}
          onClose={() => closeAlert('top-left')}
          onConfirm={() => closeAlert('top-left')}
        />

        <Alert
          open={openAlerts['top-right']}
          title="Top Right"
          content="This alert is positioned at the top right."
          style={{ position: 'fixed', top: '20px', right: '20px', margin: '0' }}
          onClose={() => closeAlert('top-right')}
          onConfirm={() => closeAlert('top-right')}
        />

        <Alert
          open={openAlerts['bottom-left']}
          title="Bottom Left"
          content="This alert is positioned at the bottom left."
          style={{ position: 'fixed', bottom: '20px', left: '20px', margin: '0' }}
          onClose={() => closeAlert('bottom-left')}
          onConfirm={() => closeAlert('bottom-left')}
        />

        <Alert
          open={openAlerts['bottom-right']}
          title="Bottom Right"
          content="This alert is positioned at the bottom right."
          style={{ position: 'fixed', bottom: '20px', right: '20px', margin: '0' }}
          onClose={() => closeAlert('bottom-right')}
          onConfirm={() => closeAlert('bottom-right')}
        />

        <Alert
          open={openAlerts.center}
          title="Center (Default)"
          content="This alert is centered (default behavior)."
          onClose={() => closeAlert('center')}
          onConfirm={() => closeAlert('center')}
        />

        <Alert
          open={openAlerts['modal-style']}
          title="Modal title"
          content="Interactively monetize corporate alignments and fully tested niche markets."
          status="warning"
          type="confirm"
          showClose={false}
          onClose={() => closeAlert('modal-style')}
          onConfirm={() => closeAlert('modal-style')}
          onCancel={() => closeAlert('modal-style')}
        />
      </div>
    );
  },
};
