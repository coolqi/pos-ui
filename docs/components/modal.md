# Modal 模态框

模态框组件，用于显示重要的信息或收集用户输入。

## 基础用法

最简单的用法，显示一个基础的模态框：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        title="Basic Modal"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          alert('Confirmed!');
          setOpen(false);
        }}
      >
        <p>This is a basic modal with default settings.</p>
        <p>You can close it by clicking Cancel, Confirm, or the X button.</p>
      </Modal>
    </>
  );
};
```

## 不同尺寸

Modal 支持三种尺寸：`small`、`medium`、`large`：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ small: false, medium: false, large: false });

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button onClick={() => setOpen(prev => ({ ...prev, small: true }))}>
        Small Modal
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, medium: true }))}>
        Medium Modal
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, large: true }))}>
        Large Modal
      </Button>

      <Modal
        open={open.small}
        title="Small Modal"
        size="small"
        onClose={() => setOpen(prev => ({ ...prev, small: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, small: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, small: false }))}
      >
        <p>This is a small modal (400px width).</p>
      </Modal>

      <Modal
        open={open.medium}
        title="Medium Modal"
        size="medium"
        onClose={() => setOpen(prev => ({ ...prev, medium: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, medium: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, medium: false }))}
      >
        <p>This is a medium modal (500px width).</p>
      </Modal>

      <Modal
        open={open.large}
        title="Large Modal"
        size="large"
        onClose={() => setOpen(prev => ({ ...prev, large: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, large: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, large: false }))}
      >
        <p>This is a large modal (600px width).</p>
      </Modal>
    </div>
  );
};
```

## 自定义按钮

可以自定义按钮文本，或者完全自定义按钮：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ custom: false, noButtons: false });

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button onClick={() => setOpen(prev => ({ ...prev, custom: true }))}>
        Custom Buttons
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, noButtons: true }))}>
        No Buttons
      </Button>

      <Modal
        open={open.custom}
        title="Custom Buttons"
        cancelText="No Thanks"
        confirmText="Yes, Please"
        onClose={() => setOpen(prev => ({ ...prev, custom: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, custom: false }))}
        onConfirm={() => {
          alert('Custom confirm action!');
          setOpen(prev => ({ ...prev, custom: false }));
        }}
      >
        <p>This modal has custom button text.</p>
      </Modal>

      <Modal
        open={open.noButtons}
        title="No Buttons"
        showDefaultButtons={false}
        onClose={() => setOpen(prev => ({ ...prev, noButtons: false }))}
      >
        <p>This modal has no default buttons.</p>
      </Modal>
    </div>
  );
};
```

## 自定义头部

可以完全自定义头部内容：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ header: false, withClose: false });

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button onClick={() => setOpen(prev => ({ ...prev, header: true }))}>
        Custom Header
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, withClose: true }))}>
        With Close Button
      </Button>

      <Modal
        open={open.header}
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <h3 style={{ margin: 0, flex: 1 }}>Custom Header</h3>
            <Button size="small" variant="outline" onClick={() => setOpen(prev => ({ ...prev, header: false }))}>
              Custom Close
            </Button>
          </div>
        }
        showDefaultButtons={false}
        onClose={() => setOpen(prev => ({ ...prev, header: false }))}
      >
        <p>This modal has a custom header with emoji and custom close button.</p>
      </Modal>

      <Modal
        open={open.withClose}
        title="With Close Button"
        showClose={true}
        onClose={() => setOpen(prev => ({ ...prev, withClose: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, withClose: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, withClose: false }))}
      >
        <p>This modal has a close button in addition to the default buttons.</p>
      </Modal>
    </div>
  );
};
```

## 表单 Modal

Modal 非常适合用于表单输入：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
      <Modal
        open={open}
        title="User Information"
        size="large"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          alert('Form submitted!');
          setOpen(false);
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
    </>
  );
};
```

## 确认对话框

用于确认重要操作的对话框：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete Item
      </Button>
      <Modal
        open={open}
        title="Confirm Action"
        size="small"
        cancelText="Cancel"
        confirmText="Delete"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          alert('Item deleted!');
          setOpen(false);
        }}
      >
        <p>Are you sure you want to delete this item?</p>
        <p style={{ color: 'var(--pos-ui-text-secondary)', fontSize: '14px' }}>
          This action cannot be undone.
        </p>
      </Modal>
    </>
  );
};
```

## 关闭方式

Modal 支持多种关闭方式：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        title="Modal with Multiple Close Options"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          alert('Confirmed!');
          setOpen(false);
        }}
      >
        <p>This modal can be closed in multiple ways:</p>
        <ul>
          <li>Click the X button in the header</li>
          <li>Click the Cancel button</li>
          <li>Click the Confirm button</li>
          <li>Click outside the modal (overlay)</li>
          <li>Press the ESC key</li>
        </ul>
      </Modal>
    </>
  );
};
```

## 交互控制

控制 Modal 的交互行为：

```tsx
import { Modal, Button } from 'pos-ui-react';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState({ overlay: false, noClose: false, noScroll: false });

  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button onClick={() => setOpen(prev => ({ ...prev, overlay: true }))}>
        No Overlay Close
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, noClose: true }))}>
        No Close Button
      </Button>
      <Button onClick={() => setOpen(prev => ({ ...prev, noScroll: true }))}>
        No Scroll Disable
      </Button>

      <Modal
        open={open.overlay}
        title="No Overlay Close"
        closeOnOverlayClick={false}
        onClose={() => setOpen(prev => ({ ...prev, overlay: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, overlay: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, overlay: false }))}
      >
        <p>Clicking the overlay will not close this modal.</p>
      </Modal>

      <Modal
        open={open.noClose}
        title="No Close Button"
        showClose={false}
        onClose={() => setOpen(prev => ({ ...prev, noClose: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, noClose: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, noClose: false }))}
      >
        <p>This modal has no close button in the header.</p>
      </Modal>

      <Modal
        open={open.noScroll}
        title="No Scroll Disable"
        disableScroll={false}
        onClose={() => setOpen(prev => ({ ...prev, noScroll: false }))}
        onCancel={() => setOpen(prev => ({ ...prev, noScroll: false }))}
        onConfirm={() => setOpen(prev => ({ ...prev, noScroll: false }))}
      >
        <p>This modal does not disable page scrolling.</p>
      </Modal>
    </div>
  );
};
```

## API

### Modal Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示 Modal | `boolean` | - |
| title | Modal 标题 | `string` | - |
| children | Modal 内容 | `React.ReactNode` | - |
| closeOnOverlayClick | 点击遮罩层是否关闭 Modal | `boolean` | `true` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| header | 自定义头部内容 | `React.ReactNode` | - |
| showDefaultButtons | 是否显示默认的 Cancel 和 Confirm 按钮 | `boolean` | `true` |
| cancelText | Cancel 按钮文本 | `string` | `'Cancel'` |
| confirmText | Confirm 按钮文本 | `string` | `'Confirm'` |
| onCancel | Cancel 按钮点击事件 | `() => void` | - |
| onConfirm | Confirm 按钮点击事件 | `() => void` | - |
| onClose | 关闭事件 | `() => void` | - |
| size | Modal 尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| centered | 是否居中显示 | `boolean` | `true` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| headerClassName | 头部自定义类名 | `string` | - |
| contentClassName | 内容自定义类名 | `string` | - |
| disableScroll | 是否禁用滚动 | `boolean` | `true` |
| showOverlay | 是否显示遮罩层 | `boolean` | `true` |
| overlayClassName | 遮罩层自定义类名 | `string` | - |

## 设计指南

### 使用场景

- **确认操作**：删除、保存等重要操作前的确认
- **表单输入**：收集用户信息或设置
- **信息展示**：显示详细信息或帮助内容
- **选择操作**：从多个选项中选择

### 最佳实践

1. **保持简洁**：Modal 内容应该简洁明了，避免过于复杂
2. **明确操作**：按钮文本应该明确表达操作意图
3. **合理尺寸**：根据内容选择合适的尺寸
4. **键盘支持**：支持 ESC 键关闭
5. **焦点管理**：正确处理焦点，提升可访问性

### 注意事项

- Modal 会阻止页面滚动，确保用户专注于当前操作
- 使用 `createPortal` 渲染到 `document.body`，避免样式冲突
- 支持键盘导航和屏幕阅读器
- 在移动端会自动调整尺寸和布局
