# Alert 警告框

警告框组件，用于显示重要的信息、警告或确认操作。

## 基础用法

最简单的用法，显示一个基础的警告框：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      <Alert
        open={open}
        title="Basic Alert"
        content="This is a basic alert with default settings."
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      />
    </>
  );
};
```

## 命令式 API

Alert 提供了命令式 API，可以在任何地方调用，无需管理状态：

```tsx
import { Alert, AlertContainer, alertApi, Button } from 'pos-ui-react';

export default () => {
  return (
    <>
      {/* 必须在应用中渲染 AlertContainer */}
      <AlertContainer />
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => alertApi.info('Info Alert', { content: 'This is an info alert.' })}>
          Info Alert
        </Button>
        <Button onClick={() => alertApi.error('Error Alert', { content: 'Something went wrong!' })}>
          Error Alert
        </Button>
        <Button onClick={() => alertApi.success('Success Alert', { content: 'Operation completed!' })}>
          Success Alert
        </Button>
        <Button onClick={() => alertApi.warning('Warning Alert', { content: 'Please be careful!' })}>
          Warning Alert
        </Button>
        <Button onClick={() => alertApi.confirm('Confirm Action', { content: 'Are you sure?' })}>
          Confirm Alert
        </Button>
      </div>
    </>
  );
};
```

### 命令式 API 方法

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| `alertApi.show(title, options)` | 显示基础 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.info(title, options)` | 显示信息 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.error(title, options)` | 显示错误 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.success(title, options)` | 显示成功 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.warning(title, options)` | 显示警告 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.confirm(title, options)` | 显示确认 Alert | `title: string`, `options?: AlertProps` |
| `alertApi.close(id)` | 关闭指定 Alert | `id: string` |
| `alertApi.closeAll()` | 关闭所有 Alert | - |

## 不同状态

Alert 支持多种状态，每种状态都有对应的图标和颜色：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ error: false, info: false, success: false, warning: false });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen(prev => ({ ...prev, error: true }))}>
          Error Alert
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, info: true }))}>
          Info Alert
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, success: true }))}>
          Success Alert
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, warning: true }))}>
          Warning Alert
        </Button>
      </div>

      <Alert
        open={open.error}
        title="Error Alert"
        content="Something went wrong. Please try again."
        status="error"
        onClose={() => setOpen(prev => ({ ...prev, error: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, error: false }))}
      />

      <Alert
        open={open.info}
        title="Info Alert"
        content="Here is some important information for you."
        status="info"
        onClose={() => setOpen(prev => ({ ...prev, info: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, info: false }))}
      />

      <Alert
        open={open.success}
        title="Success Alert"
        content="Your operation has been completed successfully."
        status="success"
        onClose={() => setOpen(prev => ({ ...prev, success: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, success: false }))}
      />

      <Alert
        open={open.warning}
        title="Warning Alert"
        content="Please check your input before proceeding."
        status="warning"
        onClose={() => setOpen(prev => ({ ...prev, warning: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, warning: false }))}
      />
    </div>
  );
};
```

## 不同尺寸

Alert 支持三种尺寸：`small`、`medium`、`large`：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ small: false, medium: false, large: false });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen(prev => ({ ...prev, small: true }))}>
          Small Alert
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, medium: true }))}>
          Medium Alert
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, large: true }))}>
          Large Alert
        </Button>
      </div>

      <Alert
        open={open.small}
        title="Small Alert"
        content="This is a small alert."
        size="small"
        onClose={() => setOpen(prev => ({ ...prev, small: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, small: false }))}
      />

      <Alert
        open={open.medium}
        title="Medium Alert"
        content="This is a medium alert."
        size="medium"
        onClose={() => setOpen(prev => ({ ...prev, medium: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, medium: false }))}
      />

      <Alert
        open={open.large}
        title="Large Alert"
        content="This is a large alert with more content to demonstrate the larger size."
        size="large"
        onClose={() => setOpen(prev => ({ ...prev, large: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, large: false }))}
      />
    </div>
  );
};
```

## 不同类型

Alert 支持两种类型：`default` 和 `confirm`：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ default: false, confirm: false });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen(prev => ({ ...prev, default: true }))}>
          Default Type
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, confirm: true }))}>
          Confirm Type
        </Button>
      </div>

      <Alert
        open={open.default}
        title="Default Type"
        content="This is a default type alert with OK button."
        type="default"
        onClose={() => setOpen(prev => ({ ...prev, default: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, default: false }))}
      />

      <Alert
        open={open.confirm}
        title="Confirm Action"
        content="Are you sure you want to proceed with this action?"
        type="confirm"
        confirmText="Confirm"
        cancelText="Cancel"
        onClose={() => setOpen(prev => ({ ...prev, confirm: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, confirm: false }))}
        onConfirm={() => {
          alert('Action confirmed!');
          setOpen(prev => ({ ...prev, confirm: false }));
        }}
      />
    </div>
  );
};
```

## 自定义控制

可以自定义 Alert 的各种行为：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ 
    noClose: false, 
    noOverlay: false, 
    noFooter: false, 
    customFooter: false 
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen(prev => ({ ...prev, noClose: true }))}>
          No Close Button
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, noOverlay: true }))}>
          No Overlay
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, noFooter: true }))}>
          No Footer
        </Button>
        <Button onClick={() => setOpen(prev => ({ ...prev, customFooter: true }))}>
          Custom Footer
        </Button>
      </div>

      <Alert
        open={open.noClose}
        title="No Close Button"
        content="This alert has no close button in the header."
        showClose={false}
        onConfirm={() => setOpen(prev => ({ ...prev, noClose: false }))}
      />

      <Alert
        open={open.noOverlay}
        title="No Overlay"
        content="This alert has no overlay background."
        showOverlay={false}
        onClose={() => setOpen(prev => ({ ...prev, noOverlay: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, noOverlay: false }))}
      />

      <Alert
        open={open.noFooter}
        title="No Footer"
        content="This alert has no footer buttons."
        hideFooter={true}
        onClose={() => setOpen(prev => ({ ...prev, noFooter: false }))}
      />

      <Alert
        open={open.customFooter}
        title="Custom Footer"
        content="This alert has a custom footer."
        footer={
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
            <Button variant="secondary" size="small" onClick={() => setOpen(prev => ({ ...prev, customFooter: false }))}>
              Secondary Action
            </Button>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="outline" size="small" onClick={() => setOpen(prev => ({ ...prev, customFooter: false }))}>
                Cancel
              </Button>
              <Button variant="primary" size="small" onClick={() => setOpen(prev => ({ ...prev, customFooter: false }))}>
                Save
              </Button>
            </div>
          </div>
        }
        onClose={() => setOpen(prev => ({ ...prev, customFooter: false }))}
      />
    </div>
  );
};
```

## 关闭方式

Alert 支持多种关闭方式：

```tsx
import { Alert, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      <Alert
        open={open}
        title="Alert with Multiple Close Options"
        content="This alert can be closed in multiple ways:"
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      >
        <ul>
          <li>Click the X button in the header</li>
          <li>Click the OK button</li>
          <li>Click outside the alert (overlay)</li>
          <li>Press the ESC key</li>
        </ul>
      </Alert>
    </>
  );
};
```

## API

### Alert Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示 Alert | `boolean` | - |
| title | Alert 标题 | `string` | - |
| content | Alert 内容 | `string` | - |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| showOverlay | 是否显示遮罩层 | `boolean` | `true` |
| status | Alert 状态 | `'error' \| 'info' \| 'success' \| 'warning' \| 'basic'` | `'basic'` |
| type | Alert 类型 | `'default' \| 'confirm'` | `'default'` |
| footer | 自定义底部内容 | `React.ReactNode` | - |
| hideFooter | 是否隐藏底部 | `boolean` | `false` |
| confirmText | 确认按钮文本 | `string` | `'OK'` |
| cancelText | 取消按钮文本 | `string` | `'Cancel'` |
| onConfirm | 确认按钮点击事件 | `() => void` | - |
| onCancel | 取消按钮点击事件 | `() => void` | - |
| onClose | 关闭事件 | `() => void` | - |
| size | Alert 尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| centered | 是否居中显示 | `boolean` | `true` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| id | 元素 ID | `string` | - |

## 设计指南

### 使用场景

- **信息提示**：显示重要的信息或通知
- **警告提醒**：提醒用户注意某些操作
- **确认操作**：确认重要操作前再次确认
- **错误提示**：显示错误信息和解决方案

### 最佳实践

1. **明确标题**：标题应该简洁明了，表达主要内容
2. **详细内容**：内容应该提供足够的上下文信息
3. **合适的状态**：根据信息类型选择合适的状态图标
4. **明确的按钮**：按钮文本应该明确表达操作意图

### 注意事项

- Alert 会阻止页面滚动，确保用户专注于当前操作
- 使用 `createPortal` 渲染到 `document.body`，避免样式冲突
- 支持键盘导航和屏幕阅读器
- 在移动端会自动调整尺寸和布局
