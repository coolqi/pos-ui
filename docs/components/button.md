---
title: Button 按钮
order: 1
nav:
  title: 组件
  order: 2
group:
  title: 通用组件
  order: 1
---

# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框等。

## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
- 在表单中作为提交按钮。
- 在对话框中作为确认或取消按钮。

## 代码演示

### 基础用法

按钮有多种变体和样式类型。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="default">Default</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="mix">Mix</Button>
  </div>
);
```

### 描边按钮

通过 `outline` 属性可以设置描边样式。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" outline>Primary</Button>
    <Button variant="default" outline>Default</Button>
    <Button variant="secondary" outline>Secondary</Button>
    <Button variant="danger" outline>Danger</Button>
  </div>
);
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button variant="primary" size="small">Small</Button>
    <Button variant="primary" size="medium">Medium</Button>
    <Button variant="primary" size="large">Large</Button>
  </div>
);
```

### 圆角按钮

通过 `rounded` 属性可以设置圆角按钮。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" rounded>Primary</Button>
    <Button variant="default" rounded>Default</Button>
    <Button variant="secondary" rounded>Secondary</Button>
    <Button variant="danger" rounded>Danger</Button>
  </div>
);
```

### 带图标的按钮

按钮可以配合图标使用。

```tsx
import { Button, Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button 
      variant="primary" 
      icon={<Icon name="search" size={16} />}
    >
      Search
    </Button>
    <Button 
      variant="default" 
      icon={<Icon name="plus" size={16} />}
      iconPosition="right"
    >
      Add
    </Button>
  </div>
);
```

### 图标按钮

使用 `IconButton` 组件可以创建只有图标的按钮。

```tsx
import { IconButton, Icon } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <IconButton 
      variant="primary" 
      icon={<Icon name="search" size={16} />}
      aria-label="搜索"
    />
    <IconButton 
      variant="default" 
      icon={<Icon name="plus" size={16} />}
      aria-label="添加"
    />
    <IconButton 
      variant="danger" 
      icon={<Icon name="trash" size={16} />}
      aria-label="删除"
    />
  </div>
);
```

### 禁用状态

通过 `disabled` 属性可以禁用按钮。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" disabled>Primary</Button>
    <Button variant="default" disabled>Default</Button>
    <Button variant="danger" disabled>Danger</Button>
  </div>
);
```

### 颜色主题

通过 `color` 属性可以设置按钮的颜色主题。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* Cyan 主题 */}
    <div>
      <h4 style={{ marginBottom: '8px' }}>Cyan 主题</h4>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button color="cyan">Cyan Fill</Button>
        <Button color="cyan" outline>Cyan Outline</Button>
        <Button color="cyan" rounded>Cyan Rounded</Button>
      </div>
    </div>

    {/* Red 主题 */}
    <div>
      <h4 style={{ marginBottom: '8px' }}>Red 主题</h4>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button color="red">Red Fill</Button>
        <Button color="red" outline>Red Outline</Button>
        <Button color="red" rounded>Red Rounded</Button>
        <Button variant="link" color="red">Red Link</Button>
      </div>
    </div>
  </div>
);
```

### 按压效果

描边按钮可以通过 `solidOnPressed` 属性在按下时显示实心效果。

```tsx
import { Button } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" outline solidOnPressed>
      Press Me
    </Button>
    <Button variant="danger" outline solidOnPressed>
      Press Me
    </Button>
  </div>
);
```

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | `'primary' \| 'default' \| 'secondary' \| 'mix' \| 'dashed' \| 'text' \| 'link' \| 'danger'` | `'default'` |
| outline | 是否为描边按钮 | `boolean` | `false` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| rounded | 是否为圆角按钮 | `boolean` | `false` |
| icon | 按钮图标 | `ReactNode` | - |
| iconPosition | 图标位置 | `'left' \| 'right'` | `'left'` |
| color | 颜色主题 | `'cyan' \| 'red'` | - |
| solidOnPressed | 描边按钮按下时是否显示实心效果 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| id | 元素 ID | `string` | - |
| hidden | 是否隐藏 | `boolean` | - |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |

### IconButton Props

继承 Button 的所有属性，但不包括 `children`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 按钮图标（必填） | `ReactNode` | - |
| aria-label | 无障碍标签（必填） | `string` | - |

## 设计指南

### 按钮类型选择

- **Primary（主按钮）**：用于主要操作，一个页面中最多出现一个主按钮。
- **Default（次按钮）**：用于次要操作。
- **Secondary（次要按钮）**：用于辅助操作。
- **Dashed（虚线按钮）**：用于添加操作。
- **Text（文本按钮）**：用于最次要的操作。
- **Link（链接按钮）**：用于跳转操作。
- **Danger（危险按钮）**：用于删除、取消等危险操作。

### 尺寸选择

- **Large**：用于页面级别的主要操作。
- **Medium**：默认尺寸，适用于大多数场景。
- **Small**：用于表格、卡片等紧凑场景。

### 图标使用

- 图标应该与按钮文字语义一致。
- 图标按钮应该提供 `aria-label` 以提高可访问性。
- 图标尺寸建议：small 按钮 14px，medium 按钮 16px，large 按钮 18px。

## 常见问题

### 如何自定义按钮样式？

可以通过 `className` 或 `style` 属性自定义样式：

```tsx | pure
<Button 
  variant="primary" 
  className="my-custom-button"
  style={{ width: '200px' }}
>
  Custom Button
</Button>
```

### 如何实现按钮组？

可以使用 flex 布局组合多个按钮：

```tsx | pure
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant="default">取消</Button>
  <Button variant="primary">确定</Button>
</div>
```

### 按钮如何支持加载状态？

目前暂不支持加载状态，后续版本会添加。

