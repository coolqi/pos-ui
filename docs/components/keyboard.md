# VirtualKeyboard 虚拟键盘

虚拟键盘组件，支持多种布局和输入模式。

## 基础用法

```tsx
import { VirtualKeyboard } from 'pos-ui-react';
import { useRef, useState } from 'react';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (key: string) => {
    setInputValue(prev => prev + key);
  };

  const handleBackspace = () => {
    setInputValue(prev => prev.slice(0, -1));
  };

  const handleEnter = () => {
    console.log('输入完成:', inputValue);
  };

  return (
    <div>
      <input 
        ref={inputRef}
        value={inputValue}
        readOnly
        placeholder="点击虚拟键盘输入"
        style={{ 
          width: '300px', 
          padding: '8px', 
          marginBottom: '16px',
          border: '1px solid #d9d9d9',
          borderRadius: '4px'
        }}
      />
      <VirtualKeyboard
        targetInput={inputRef.current}
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
        onEnter={handleEnter}
      />
    </div>
  );
};
```

## 不同布局

```tsx
import { VirtualKeyboard } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <div>
      <h4>默认布局</h4>
      <VirtualKeyboard
        layout="default"
        onKeyPress={(key) => console.log('Default:', key)}
      />
    </div>
    <div>
      <h4>数字键盘</h4>
      <VirtualKeyboard
        layout="numeric"
        onKeyPress={(key) => console.log('Numeric:', key)}
      />
    </div>
    <div>
      <h4>符号键盘</h4>
      <VirtualKeyboard
        layout="symbol"
        onKeyPress={(key) => console.log('Symbol:', key)}
      />
    </div>
  </div>
);
```

## 输入模式

```tsx
import { VirtualKeyboard } from 'pos-ui-react';

export default () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <div>
      <h4>英文输入</h4>
      <VirtualKeyboard
        inputMode="english"
        onKeyPress={(key) => console.log('English:', key)}
      />
    </div>
    <div>
      <h4>中文输入</h4>
      <VirtualKeyboard
        inputMode="chinese"
        onKeyPress={(key) => console.log('Chinese:', key)}
      />
    </div>
  </div>
);
```

## 自定义样式

```tsx
import { VirtualKeyboard } from 'pos-ui-react';

export default () => (
  <VirtualKeyboard
    className="custom-keyboard"
    style={{ 
      border: '2px solid #134CEB',
      borderRadius: '8px',
      padding: '16px'
    }}
    onKeyPress={(key) => console.log('Custom styled keyboard:', key)}
  />
);
```

## API

### VirtualKeyboard Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示键盘 | `boolean` | `true` |
| layout | 键盘布局 | `'default' \| 'numeric' \| 'symbol' \| 'numOnly' \| 'chinese'` | `'default'` |
| layoutName | 布局名称 | `'default' \| 'shift'` | `'default'` |
| inputMode | 输入模式 | `'english' \| 'chinese'` | `'english'` |
| inputType | 输入类型 | `'text' \| 'number' \| 'password'` | `'text'` |
| maxLength | 最大长度 | `number` | - |
| showCloseButton | 是否显示关闭按钮 | `boolean` | `false` |
| targetInput | 目标输入元素 | `HTMLInputElement \| null` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| onChange | 值变化事件 | `(value: string) => void` | - |
| onEnter | 回车事件 | `(value: string) => void` | - |
| onClose | 关闭事件 | `() => void` | - |
| onFocus | 聚焦事件 | `() => void` | - |
| onBlur | 失焦事件 | `() => void` | - |
| onClear | 清空事件 | `() => void` | - |
| onNext | 下一个事件 | `() => void` | - |
| onPrev | 上一个事件 | `() => void` | - |

### 键盘布局说明

- **default**: 标准 QWERTY 布局
- **numeric**: 数字键盘布局
- **symbol**: 符号键盘布局
- **numOnly**: 纯数字键盘
- **chinese**: 中文输入法键盘

### 输入模式说明

- **english**: 英文输入模式
- **chinese**: 中文输入模式，支持拼音输入
