---
title: 快速开始
order: 1
nav:
  title: 指南
  order: 1
---

# 快速开始

POS UI 是一个专为 POS 系统设计的 React 组件库，提供了丰富的组件和主题系统。

## 安装

### 使用包管理器

我们推荐使用 `pnpm` 或 `npm` 来安装：

```bash
# 使用 pnpm（推荐）
pnpm add pos-ui-react

# 使用 npm
npm install pos-ui-react

# 使用 yarn
yarn add pos-ui-react
```

### 浏览器引入

暂不支持浏览器直接引入，请使用包管理器安装。

## 使用

### 1. 引入样式

在你的项目入口文件（如 `main.tsx` 或 `App.tsx`）中引入样式：

```tsx | pure
// main.tsx
import 'pos-ui-react/style.css';
```

### 2. 使用组件

#### 基础使用

```tsx | pure
// App.tsx
import { Button } from 'pos-ui-react';
import 'pos-ui-react/style.css';

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="default">Default Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
}

export default App;
```

#### 使用主题系统

POS UI 提供了完善的主题系统，支持亮色和暗色主题：

```tsx | pure
import { Button, ThemeProvider, ThemeToggle } from 'pos-ui-react';
import 'pos-ui-react/style.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableLocalStorage>
      <div>
        <ThemeToggle />
        <Button variant="primary">Primary Button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

#### 不使用 ThemeProvider

如果你的项目已经有自己的主题系统，可以直接通过 `data-theme` 属性控制主题：

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

或者在 HTML 根元素设置：

```html
<html data-theme="dark">
  <head>...</head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3. 按需加载

POS UI 支持按需加载，可以减小打包体积。

#### 方式 1: 从主入口导入（推荐）

```tsx | pure
import { Button, Icon, ThemeToggle } from 'pos-ui-react';
```

现代打包工具（如 Vite、Webpack 5）会自动进行 Tree Shaking，只打包你使用的组件。

#### 方式 2: 从子路径导入

```tsx | pure
import { Button } from 'pos-ui-react/components/button';
import { Icon } from 'pos-ui-react/components/icon';
import { ThemeToggle } from 'pos-ui-react/components/themeToggle';
```

这种方式可以更精确地控制导入，但需要手动管理路径。

## TypeScript 支持

POS UI 使用 TypeScript 编写，提供完整的类型定义：

```tsx | pure
import { Button, ButtonProps } from 'pos-ui-react';
import { FC } from 'react';

const MyButton: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// 或者直接使用类型
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked', event);
};

<Button onClick={handleClick}>Click me</Button>
```

## 兼容性

- React >= 18.0.0
- 现代浏览器和 IE11+（需要 polyfills）
- 桌面端优先（1024-1920px）

## 下一步

- 查看 [主题配置](/guide/theme) 了解如何自定义主题
- 浏览 [组件文档](/components/button) 了解所有可用组件
- 查看 [安装指南](/guide/installation) 了解更多安装选项

