# POS UI - React 组件库

一个支持主题切换的 React 组件库，使用 SCSS 和 TypeScript 构建。

## 特性

- 🎨 支持浅色/深色主题切换
- 📦 支持通过 props 传递主题
- 🎯 TypeScript 支持
- 🖥️ 专为桌面端优化（1024-1920px）
- 🧪 Storybook 文档和测试
- 📦 可发布到 npm

## 安装

```bash
pnpm add pos-ui
# 或
npm install pos-ui
# 或
yarn add pos-ui
```

## 快速开始

### 基础使用

```tsx
import React from 'react';
import { ThemeProvider, Button, Card } from 'pos-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableLocalStorage={true}>
      <div>
        <h1>我的应用</h1>
        <Button variant="primary">点击我</Button>
        <Card title="卡片">内容</Card>
      </div>
    </ThemeProvider>
  );
}
```

> ✨ **无需配置！** 现代构建工具（Vite、Webpack 5+）会自动进行 Tree Shaking，只打包使用的组件。样式也会自动包含。

### 实现主题切换

组件库提供了 `useTheme` hook，你可以用它实现自己的主题切换 UI：

```tsx
import React from 'react';
import { ThemeProvider, useTheme, Button } from 'pos-ui';

// 自定义主题切换按钮
function MyThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="default" 
      styleType="outline"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙 切换到深色' : '☀️ 切换到浅色'}
    </Button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableLocalStorage={true}>
      <div>
        <MyThemeToggle />
        <h1>我的应用</h1>
        {/* 其他组件 */}
      </div>
    </ThemeProvider>
  );
}
```

> 📖 更多配置选项请查看 [按需导入配置指南](./ON-DEMAND-IMPORT.md)

### 业务组件按需导入

```tsx
import React from 'react';
import { UserProfile } from 'pos-ui/blocks/userProfile';

function App() {
  return (
    <div>
      <UserProfile 
        user={userData}
        onEdit={handleEdit}
      />
    </div>
  );
}
```

## 组件

### ThemeProvider

主题提供者组件，用于管理全局主题状态。

#### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `defaultTheme` | `'light' \| 'dark'` | `'light'` | 默认主题 |
| `enableLocalStorage` | `boolean` | `true` | 是否启用本地存储 |

### ThemeToggle

使用 Context 的主题切换按钮。

### ThemeToggleWithProps

支持 props 传递的主题切换按钮。

#### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `theme` | `'light' \| 'dark'` | `'light'` | 当前主题 |
| `onThemeChange` | `(theme: Theme) => void` | - | 主题变化回调 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `className` | `string` | `''` | 自定义类名 |

## 主题系统

组件库使用 CSS 变量和 `data-theme` 属性来管理主题：

```css
/* 浅色主题（默认） */
:root {
  --pos-ui-primary-color: #134CEB;
  --pos-ui-bg-color: #fff;
  --pos-ui-text-primary: rgba(0, 0, 0, 0.88);
  /* ... */
}

/* 深色主题 */
[data-theme='dark'] {
  --pos-ui-primary-color: #4d70ff;
  --pos-ui-bg-color: #1a1a1a;
  --pos-ui-text-primary: rgba(255, 255, 255, 0.85);
  /* ... */
}
```

主题切换时，`ThemeProvider` 会自动在 `<html>` 标签上设置 `data-theme="light"` 或 `data-theme="dark"` 属性。

### 自定义主题变量

你可以在你的应用中覆盖这些变量：

```css
:root {
  --pos-ui-primary-color: #your-color;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --card-background: #ffffff;
  --button-background: #f3f4f6;
  --button-hover: #e5e7eb;
}

.dark {
  --primary-color: #818cf8;
  --primary-hover: #6366f1;
  --background-color: #0f172a;
  --surface-color: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border-color: #334155;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  --card-background: #1e293b;
  --button-background: #334155;
  --button-hover: #475569;
}
```

## 按需加载详解

### 什么是按需加载？

按需加载（Tree Shaking）是一种优化技术，允许用户只导入他们实际使用的组件，而不是整个库。

### 开箱即用的按需加载

我们的组件库已经配置好了按需加载，用户无需任何配置即可享受：

```tsx
// 用户这样写
import { Button, Card } from 'pos-ui';

// 构建工具会自动优化，只打包使用的组件
// 未使用的组件不会被包含在最终bundle中
```

### 文件大小对比

从构建结果可以看到：

```
主入口: index.es.js (0.51 kB) - 只包含导出声明
组件文件:
- Button: components/button.es.js (0.08 kB)
- UserProfile: blocks/userProfile.es.js (3.50 kB)
```

### 技术实现

1. **ES模块导出** - 使用标准的ES模块语法
2. **代码分割** - 每个组件独立打包
3. **Tree Shaking友好** - 设置 `"sideEffects": false`
4. **多入口构建** - 支持直接路径导入

### 构建工具支持

| 构建工具 | 按需加载支持 | 配置要求 |
|----------|-------------|----------|
| Vite | ✅ 自动支持 | 无需配置 |
| Webpack 5+ | ✅ 自动支持 | 无需配置 |
| Rollup | ✅ 自动支持 | 无需配置 |
| Create React App | ✅ 自动支持 | 无需配置 |
| Next.js | ✅ 自动支持 | 无需配置 |

### 样式导入策略

#### 自动样式导入（推荐）

```tsx
import { Button, Card } from 'pos-ui';
// ✅ 样式自动包含，无需额外导入
```

#### 手动样式导入（可选）

如果你需要更精确的样式控制：

```tsx
// 方式1: 导入所有样式
import 'pos-ui/styles';

// 方式2: 只导入组件，不导入样式
import { Button, Card } from 'pos-ui';
// 然后手动导入样式
import 'pos-ui/dist/pos-ui.css';
```

#### 样式按需加载

- **组件样式** - 每个组件的样式会自动包含
- **主题变量** - CSS变量会自动包含，支持主题切换
- **全局样式** - 基础样式会自动包含

### 验证按需加载

你可以通过以下方式验证按需加载效果：

1. **检查Bundle大小** - 只导入Button时，bundle中不应包含Card等组件
2. **网络面板** - 确认只加载了需要的文件
3. **Bundle分析器** - 使用工具分析最终打包结果

## 开发

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 运行 Storybook

```bash
pnpm storybook
```

### 构建组件库

```bash
pnpm build:lib
```

### 发布到 npm

```bash
pnpm publish
```

## 许可证

MIT