# FunctionCard 功能卡片

FunctionCard 是一个业务组件，用于展示 POS 系统中的各种功能入口。

## 基本用法

```tsx
import { FunctionCard, FUNCTION_CARD_NAME } from 'pos-ui-react';

export default () => (
  <FunctionCard 
    name={FUNCTION_CARD_NAME.DINE_IN}
    title="堂食"
    size="lg"
    onClick={(name) => {
      // 处理点击事件
      console.log('点击了:', name);
    }}
  />
);
```

## 所有功能卡片

```tsx
import { FunctionCard, FUNCTION_CARD_NAME } from 'pos-ui-react';

export default () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '24px',
    padding: '20px'
  }}>
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DINE_IN} 
      title="堂食" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.TOGO} 
      title="外带" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.PICKUP} 
      title="自取" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DELIVERY} 
      title="外卖" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.RECALL} 
      title="找单" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.OPEN_DRAW} 
      title="钱箱" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.REPORT} 
      title="报表" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.ADMIN} 
      title="管理" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.BATCH} 
      title="批量" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
  </div>
);
```

## 尺寸

FunctionCard 支持两种尺寸：

```tsx
import { FunctionCard, FUNCTION_CARD_NAME } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DINE_IN} 
      title="堂食" 
      size="sm"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DINE_IN} 
      title="堂食" 
      size="lg"
      onClick={(name) => console.log('点击了:', name)}
    />
  </div>
);
```

## 禁用状态

```tsx
import { FunctionCard, FUNCTION_CARD_NAME } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DINE_IN} 
      title="堂食" 
      size="lg"
      disabled
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.TOGO} 
      title="外带" 
      size="lg"
      disabled
      onClick={(name) => console.log('点击了:', name)}
    />
  </div>
);
```

## 小尺寸网格布局

```tsx
import { FunctionCard, FUNCTION_CARD_NAME } from 'pos-ui-react';

export default () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
    gap: '16px',
    padding: '20px'
  }}>
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DINE_IN} 
      title="堂食" 
      size="sm"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.TOGO} 
      title="外带" 
      size="sm"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.PICKUP} 
      title="自取" 
      size="sm"
      onClick={(name) => console.log('点击了:', name)}
    />
    <FunctionCard 
      name={FUNCTION_CARD_NAME.DELIVERY} 
      title="外卖" 
      size="sm"
      onClick={(name) => console.log('点击了:', name)}
    />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.RECALL} 
            title="找单" 
            size="sm"
            onClick={(name) => console.log('点击了:', name)}
          />
          <FunctionCard 
            name={FUNCTION_CARD_NAME.OPEN_DRAW} 
            title="钱箱" 
            size="sm"
            onClick={(name) => console.log('点击了:', name)}
          />
  </div>
);
```

## API

### FunctionCard Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 功能卡片名称 | `FUNCTION_CARD_NAME` | - |
| title | 卡片标题 | `string` | - |
| onClick | 点击事件 | `(name: FUNCTION_CARD_NAME) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 卡片尺寸 | `'sm' \| 'lg'` | `'sm'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |

### FUNCTION_CARD_NAME

支持的功能卡片类型：

- `DINE_IN` - 堂食
- `TOGO` - 外带
- `PICKUP` - 自取
- `DELIVERY` - 外卖
- `RECALL` - 找单
- `OPEN_DRAW` - 钱箱
- `REPORT` - 报表
- `ADMIN` - 管理
- `BATCH` - 批量

## 设计指南

### 使用场景

FunctionCard 主要用于：
- POS 系统主界面功能入口
- 收银台功能选择
- 管理后台功能导航

### 布局建议

- 大尺寸卡片适合主要功能入口
- 小尺寸卡片适合次要功能或紧凑布局
- 建议使用网格布局确保响应式设计

### 交互设计

- 卡片支持点击反馈
- 禁用状态有明显的视觉提示
- 支持键盘导航和屏幕阅读器
