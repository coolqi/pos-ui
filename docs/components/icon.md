---
title: Icon 图标
order: 2
---

# Icon 图标

语义化的矢量图形，提供了一套常用的图标集合。

## 何时使用

- 用于按钮、菜单、导航等场景。
- 用于提示、说明等辅助性内容。
- 用于增强视觉效果和用户体验。

## 代码演示

### 基础用法

使用 `name` 属性指定图标名称。

```tsx
import { Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', fontSize: '24px' }}>
    <Icon name="search" />
    <Icon name="plus" />
    <Icon name="trash" />
    <Icon name="edit" />
    <Icon name="close" />
  </div>
);
```

### 图标尺寸

通过 `size` 属性可以设置图标尺寸。

```tsx
import { Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon name="search" size={16} />
    <Icon name="search" size={24} />
    <Icon name="search" size={32} />
    <Icon name="search" size={48} />
  </div>
);
```

### 图标颜色

通过 `color` 属性可以设置图标颜色。

```tsx
import { Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', fontSize: '24px' }}>
    <Icon name="search" color="#646cff" />
    <Icon name="plus" color="#10b981" />
    <Icon name="trash" color="#ef4444" />
    <Icon name="edit" color="#f59e0b" />
    <Icon name="close" color="#6b7280" />
  </div>
);
```

### 自定义样式

可以通过 `className` 或 `style` 自定义样式。

```tsx
import { Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', fontSize: '24px' }}>
    <Icon 
      name="search" 
      style={{ 
        color: '#646cff',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    />
  </div>
);
```

### 系统图标

```tsx
import { Icon, SYSTEM_ICON_NAMES } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', fontSize: '24px' }}>
    {SYSTEM_ICON_NAMES.map(name => <Icon name={name} />)}
  </div>
);
```

### 所有图标

```tsx
import { Icon, ICON_NAMES } from 'pos-ui-react';

export default () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '24px',
    padding: '24px',
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
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--pos-ui-primary-color)';
          e.currentTarget.style.backgroundColor = 'var(--pos-ui-background-secondary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--pos-ui-border-color)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <Icon name={name as keyof typeof ICON_NAMES} size={24} />
        <span style={{ fontSize: '12px', color: 'var(--pos-ui-text-tertiary)' }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);
```

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称 | `keyof typeof ICON_NAMES` | - |
| size | 图标尺寸（px） | `number` | `24` |
| color | 图标颜色 | `string` | `'currentColor'` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| id | 元素 ID | `string` | - |
| hidden | 是否隐藏 | `boolean` | - |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |

## 设计指南

### 图标尺寸

- **16px**：用于小按钮、表格等紧凑场景。
- **20px**：用于普通按钮、输入框等常规场景。
- **24px**：默认尺寸，适用于大多数场景。
- **32px+**：用于大图标、空状态等场景。

### 图标颜色

- 默认使用 `currentColor`，继承父元素的文字颜色。
- 可以使用主题色、状态色等语义化颜色。
- 避免使用过于鲜艳的颜色，保持视觉和谐。

### 图标使用原则

- 图标应该与文字语义一致。
- 图标应该保持统一的视觉风格。
- 图标应该具有良好的辨识度。
- 图标按钮应该提供 `aria-label` 以提高可访问性。

## 常见问题

### 如何添加自定义图标？

目前暂不支持自定义图标，后续版本会添加。你可以直接使用 SVG 元素：

```tsx | pure
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="..." />
</svg>
```

### 图标如何响应主题？

图标默认使用 `currentColor`，会自动继承父元素的颜色，因此会自动响应主题变化。

### 图标如何实现动画效果？

可以通过 CSS 或 `style` 属性添加动画：

```tsx | pure
<Icon 
  name="search" 
  style={{ 
    transition: 'transform 0.2s',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'rotate(90deg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'rotate(0deg)';
  }}
/>
```

