---
title: 主题配置
order: 3
---

# 主题配置

POS UI 提供了完善的主题系统，支持亮色和暗色两种主题，基于 CSS 变量实现，易于定制。

## 使用 ThemeProvider

### 基础使用

```tsx | pure
import { ThemeProvider, Button } from 'pos-ui-react';
import 'pos-ui-react/style.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello</Button>
    </ThemeProvider>
  );
}
```

### 配置选项

```tsx | pure
<ThemeProvider
  defaultTheme="light"        // 默认主题：'light' | 'dark'
  enableLocalStorage={true}   // 是否启用 localStorage 持久化
>
  <App />
</ThemeProvider>
```

## 使用 useTheme Hook

在组件中使用 `useTheme` hook 来访问和控制主题：

```tsx | pure
import { useTheme, Button } from 'pos-ui-react';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>当前主题: {theme}</p>
      
      {/* 切换主题 */}
      <Button onClick={toggleTheme}>
        切换主题
      </Button>
      
      {/* 设置指定主题 */}
      <Button onClick={() => setTheme('dark')}>
        切换到暗色
      </Button>
      <Button onClick={() => setTheme('light')}>
        切换到亮色
      </Button>
    </div>
  );
}
```

## 使用 ThemeToggle 组件

POS UI 提供了开箱即用的主题切换组件：

```tsx | pure
import { ThemeProvider, ThemeToggle } from 'pos-ui-react';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {/* 你的应用内容 */}
    </ThemeProvider>
  );
}
```

## 不使用 ThemeProvider

如果你的项目已经有自己的主题系统，可以直接通过 `data-theme` 属性控制主题。

### 方式 1：在根元素设置

```tsx | pure
import { Button } from 'pos-ui-react';
import 'pos-ui-react/style.css';

function App() {
  return (
    <div data-theme="dark">
      {/* Button 会自动使用深色主题 */}
      <Button variant="primary">Dark Mode Button</Button>
    </div>
  );
}
```

### 方式 2：在 HTML 根元素设置

```html
<!-- public/index.html -->
<html data-theme="dark">
  <head>...</head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 方式 3：通过 JavaScript 动态切换

```tsx | pure
import { Button } from 'pos-ui-react';
import { useEffect, useState } from 'react';
import 'pos-ui-react/style.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 直接在 document.documentElement 上设置
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        切换到 {theme === 'light' ? '暗色' : '亮色'} 模式
      </button>
      
      <Button variant="primary">Primary Button</Button>
    </div>
  );
}
```

## 自定义主题

POS UI 的主题系统基于 CSS 变量，你可以通过覆盖 CSS 变量来自定义主题。

### 覆盖全局变量

```css
/* 你的全局样式文件 */
:root {
  /* 覆盖主色 */
  --pos-ui-primary-color: #1890ff;
  
  /* 覆盖背景色 */
  --pos-ui-background-color: #f5f5f5;
  
  /* 覆盖文字颜色 */
  --pos-ui-text-primary: #333333;
}

/* 暗色主题 */
.dark {
  --pos-ui-primary-color: #40a9ff;
  --pos-ui-background-color: #141414;
  --pos-ui-text-primary: #ffffff;
}
```

### 主题变量列表

#### 颜色变量

```css
/* 主色 */
--pos-ui-primary-color: #646cff;
--pos-ui-primary-hover: #535bf2;
--pos-ui-primary-pressed: #4247cc;

/* 背景色 */
--pos-ui-background-color: #ffffff;
--pos-ui-background-secondary: #f9fafb;

/* 文字颜色 */
--pos-ui-text-primary: #213547;
--pos-ui-text-secondary: #646cff;
--pos-ui-text-tertiary: #888888;

/* 边框颜色 */
--pos-ui-border-color: #e5e7eb;
--pos-ui-border-hover: #d1d5db;

/* 状态颜色 */
--pos-ui-danger-color: #ef4444;
--pos-ui-danger-hover: #dc2626;
--pos-ui-danger-pressed: #b91c1c;
```

#### 尺寸变量

```css
/* 间距 */
--pos-ui-gap-xs: 4px;
--pos-ui-gap-sm: 8px;
--pos-ui-gap-md: 16px;
--pos-ui-gap-lg: 24px;
--pos-ui-gap-xl: 32px;

/* 圆角 */
--pos-ui-border-radius-sm: 4px;
--pos-ui-border-radius-md: 8px;
--pos-ui-border-radius-lg: 12px;
--pos-ui-border-radius-xl: 16px;
--pos-ui-border-radius-2xl: 24px;

/* 阴影 */
--pos-ui-shadow-sm: 0 2px 0 0 rgba(0, 0, 0, 0.02);
--pos-ui-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
--pos-ui-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
```

#### 按钮变量

```css
/* 按钮尺寸 */
--pos-ui-btn-height-sm: 28px;
--pos-ui-btn-height-md: 36px;
--pos-ui-btn-height-lg: 44px;

--pos-ui-btn-padding-sm: 0 12px;
--pos-ui-btn-padding-md: 0 16px;
--pos-ui-btn-padding-lg: 0 20px;

/* 按钮颜色 */
--pos-ui-btn-primary-bg: var(--pos-ui-primary-color);
--pos-ui-btn-primary-hover: var(--pos-ui-primary-hover);
--pos-ui-btn-primary-pressed: var(--pos-ui-primary-pressed);

--pos-ui-btn-default-bg: transparent;
--pos-ui-btn-default-border: var(--pos-ui-border-color);
--pos-ui-btn-default-hover: var(--pos-ui-background-secondary);
```

### 创建自定义主题

你可以创建自己的主题变体：

```css
/* custom-theme.css */
[data-theme="custom"] {
  --pos-ui-primary-color: #9333ea;
  --pos-ui-primary-hover: #7e22ce;
  --pos-ui-primary-pressed: #6b21a8;
  
  --pos-ui-background-color: #faf5ff;
  --pos-ui-text-primary: #581c87;
  
  /* 其他变量... */
}
```

然后在你的应用中使用：

```tsx | pure
<div data-theme="custom">
  <Button variant="primary">Custom Theme Button</Button>
</div>
```

## 主题最佳实践

### 1. 使用 ThemeProvider

如果你的应用需要主题切换功能，推荐使用 `ThemeProvider`：

```tsx | pure
<ThemeProvider defaultTheme="light" enableLocalStorage>
  <App />
</ThemeProvider>
```

### 2. 直接使用 data-theme

如果你的应用主题是固定的，或者已经有自己的主题系统，直接使用 `data-theme`：

```tsx | pure
<div data-theme="dark">
  <App />
</div>
```

### 3. 局部主题

你可以在任何元素上设置 `data-theme`，实现局部主题：

```tsx | pure
<div>
  {/* 亮色主题区域 */}
  <div data-theme="light">
    <Button variant="primary">Light Button</Button>
  </div>
  
  {/* 暗色主题区域 */}
  <div data-theme="dark">
    <Button variant="primary">Dark Button</Button>
  </div>
</div>
```

### 4. 响应系统主题

自动跟随系统主题：

```tsx | pure
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 检测系统主题
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // 监听系统主题变化
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <App />;
}
```

## 下一步

- 查看 [Button 组件](/components/button) 了解如何使用按钮
- 查看 [Icon 组件](/components/icon) 了解如何使用图标
- 查看 [ThemeToggle 组件](/components/theme-toggle) 了解主题切换组件

