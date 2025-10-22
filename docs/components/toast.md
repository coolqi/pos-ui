# Toast 提示框

Toast 是一个轻量级的反馈组件，用于向用户显示操作结果。

## 基本用法

### 声明式用法

```tsx | pure
import { Toast } from 'pos-ui-react';

<Toast 
  visible={true} 
  type="success" 
  title="操作成功" 
  content="您的操作已完成" 
/>
```

### 命令式用法

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => toast.success('操作成功', { content: '您的操作已完成' })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-success-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      成功提示
    </button>
    
    <button 
      onClick={() => toast.error('操作失败', { content: '请检查您的输入' })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-danger-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      错误提示
    </button>
    
    <button 
      onClick={() => toast.warning('警告', { content: '请注意相关风险' })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-warning-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      警告提示
    </button>
    
    <button 
      onClick={() => toast.info('信息', { content: '这是一条信息提示' })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-primary-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      信息提示
    </button>
  </div>
);
```

## 类型

Toast 支持 4 种类型：

```tsx | pure
// 成功提示
toast.success('Success', { content: 'Operation completed successfully' });

// 错误提示
toast.error('Error', { content: 'Something went wrong' });

// 警告提示
toast.warning('Warning', { content: 'Please check your input' });

// 信息提示
toast.info('Info', { content: 'This is an information message' });
```

## 位置

Toast 支持 6 种位置：

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => toast.success('Top Left', { position: 'top-left' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      左上角
    </button>
    
    <button 
      onClick={() => toast.info('Top Center', { position: 'top-center' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      顶部居中
    </button>
    
    <button 
      onClick={() => toast.warning('Top Right', { position: 'top-right' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      右上角
    </button>
    
    <button 
      onClick={() => toast.error('Bottom Left', { position: 'bottom-left' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      左下角
    </button>
    
    <button 
      onClick={() => toast.success('Bottom Center', { position: 'bottom-center' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      底部居中
    </button>
    
    <button 
      onClick={() => toast.info('Bottom Right', { position: 'bottom-right' })}
      style={{
        padding: '6px 12px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '4px',
        background: 'var(--pos-ui-bg-color)',
        cursor: 'pointer',
        fontSize: '12px',
      }}
    >
      右下角
    </button>
  </div>
);
```

## 显示控制

### 关闭按钮

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => toast.success('With Close Button', { showClose: true })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-success-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      显示关闭按钮
    </button>
    
    <button 
      onClick={() => toast.info('Auto Close', { 
        showClose: false, 
        duration: 3000 
      })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-primary-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      自动消失
    </button>
  </div>
);
```

### 边框

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => toast.success('With Border', { outline: true })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-success-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      显示边框
    </button>
    
    <button 
      onClick={() => toast.warning('No Border', { outline: false })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-warning-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      无边框
    </button>
  </div>
);
```

## 内容类型

### 只有标题

```tsx | pure
toast.success('Success Title');
```

### 只有内容

```tsx | pure
toast.info('', { content: 'This is content only' });
```

### 标题和内容

```tsx | pure
toast.warning('Warning Title', { 
  content: 'This is the warning message' 
});
```

## 自动消失

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => toast.info('Auto Close', { duration: 3000 })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-primary-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      3秒自动消失
    </button>
    
    <button 
      onClick={() => toast.error('Manual Close', { duration: 0 })}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-danger-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      手动关闭
    </button>
  </div>
);
```

## 批量操作

```tsx
import { toast } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <button 
      onClick={() => {
        toast.success('Toast 1');
        toast.info('Toast 2');
        toast.warning('Toast 3');
        toast.error('Toast 4');
      }}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-primary-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      显示多个 Toast
    </button>
    
    <button 
      onClick={() => toast.dismissAll()}
      style={{
        padding: '8px 16px',
        border: '1px solid var(--pos-ui-border-color)',
        borderRadius: '6px',
        background: 'var(--pos-ui-danger-color)',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      关闭所有 Toast
    </button>
  </div>
);
```

## API

### Toast Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示 | `boolean` | - |
| type | Toast 类型 | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |
| title | 标题 | `string` | - |
| content | 内容 | `string` | - |
| position | 位置 | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'top-center'` |
| outline | 是否显示边框 | `boolean` | `true` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| duration | 自动消失时间（毫秒），0 表示不自动消失 | `number` | `2000` |
| onClose | 关闭回调 | `() => void` | - |

### Toast 命令式 API

```tsx | pure
// 基础方法
toast.show(options)

// 类型方法
toast.success(title, options?)
toast.error(title, options?)
toast.warning(title, options?)
toast.info(title, options?)

// 控制方法
toast.dismiss(id)
toast.dismissAll()
```

### 命令式 API 参数

```tsx | pure
interface ToastOptions {
  content?: string;
  position?: ToastPosition;
  outline?: boolean;
  showClose?: boolean;
  duration?: number;
}
```
