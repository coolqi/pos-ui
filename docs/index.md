---
title: POS UI - React 组件库
hero:
  title: POS UI
  description: 专为 POS 系统设计的 React 组件库
  actions:
    - text: 快速开始
      link: /guide
    - text: 组件总览
      link: /components/button
features:
  - title: 🎨 主题定制
    description: 支持亮色/暗色主题切换，基于 CSS 变量实现，易于定制
  - title: 📦 开箱即用
    description: 高质量的 React 组件，开箱即用，支持 Tree Shaking
  - title: 🔧 TypeScript
    description: 使用 TypeScript 开发，提供完整的类型定义
  - title: 💻 桌面优先
    description: 专注于桌面端（1024-1920px）的 POS 系统场景
  - title: 🎯 按需加载
    description: 支持按需加载，减小打包体积
  - title: 📝 完善文档
    description: 详细的文档和示例，快速上手
---

## 安装

```bash
# 使用 pnpm
pnpm add pos-ui-react

# 使用 npm
npm install pos-ui-react

# 使用 yarn
yarn add pos-ui-react
```

## 快速开始

```tsx | pure
// main.tsx 或 App.tsx
import { Button, ThemeProvider } from 'pos-ui-react';
import 'pos-ui-react/style.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello POS UI</Button>
    </ThemeProvider>
  );
}
```

## 特性

### 主题系统

POS UI 提供了完善的主题系统，支持亮色和暗色两种主题：

```tsx | pure
import { ThemeProvider, useTheme } from 'pos-ui-react';

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableLocalStorage>
      <YourApp />
    </ThemeProvider>
  );
}
```

### TypeScript 支持

所有组件都使用 TypeScript 编写，提供完整的类型定义：

```tsx | pure
import { Button, ButtonProps } from 'pos-ui-react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### 按需加载

支持按需加载，减小打包体积：

```tsx | pure
// 方式 1: 从主入口导入（推荐）
import { Button } from 'pos-ui-react';

// 方式 2: 从子路径导入
import { Button } from 'pos-ui-react/components/button';
```

## 浏览器支持

现代浏览器和 IE11+（需要 polyfills）

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions |

## 参与贡献

欢迎提交 Issue 和 Pull Request！

## 开源协议

MIT License

