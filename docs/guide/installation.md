---
title: 安装
order: 2
---

# 安装

## 环境要求

- Node.js >= 16.0.0
- React >= 18.0.0
- React DOM >= 18.0.0

## 包管理器安装

### pnpm（推荐）

```bash
pnpm add pos-ui-react
```

### npm

```bash
npm install pos-ui-react
```

### yarn

```bash
yarn add pos-ui-react
```

## 引入样式

在你的项目入口文件（如 `main.tsx` 或 `App.tsx`）中引入样式：

```tsx | pure
// main.tsx 或 App.tsx
import 'pos-ui-react/style.css';
```

或者使用完整路径：

```tsx | pure
import 'pos-ui-react/dist/pos-ui-react.css';
```

## 开发环境配置

### Vite

如果你使用 Vite，无需额外配置，开箱即用。

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### Webpack

如果你使用 Webpack，需要配置 CSS 和 SCSS 加载器：

```bash
npm install --save-dev style-loader css-loader sass-loader sass
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

### Create React App

Create React App 已经内置了 CSS 支持，无需额外配置。

## 按需加载配置

POS UI 默认支持 Tree Shaking，现代打包工具会自动进行按需加载。

### 使用 babel-plugin-import（可选）

如果你想要更精确的按需加载控制，可以使用 `babel-plugin-import`：

```bash
npm install --save-dev babel-plugin-import
```

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'pos-ui-react',
        libraryDirectory: 'dist/components',
        camel2DashComponentName: false,
      },
      'pos-ui-react',
    ],
  ],
};
```

然后你可以这样使用：

```tsx | pure
import { Button } from 'pos-ui-react';
// 会自动转换为：
// import Button from 'pos-ui-react/dist/components/button';
```

## TypeScript 配置

POS UI 提供了完整的 TypeScript 类型定义，无需额外配置。

如果遇到类型问题，确保你的 `tsconfig.json` 包含以下配置：

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

## CDN 引入（暂不支持）

目前 POS UI 暂不支持 CDN 引入，请使用包管理器安装。

## 版本管理

### 查看当前版本

```bash
npm list pos-ui-react
```

### 升级到最新版本

```bash
# pnpm
pnpm update pos-ui-react

# npm
npm update pos-ui-react

# yarn
yarn upgrade pos-ui-react
```

### 安装指定版本

```bash
# pnpm
pnpm add pos-ui-react@1.0.0

# npm
npm install pos-ui-react@1.0.0

# yarn
yarn add pos-ui-react@1.0.0
```

## 常见问题

### 样式不生效

确保你已经在入口文件中引入了样式：

```tsx | pure
import 'pos-ui-react/style.css';
```

### TypeScript 类型错误

确保你的 `tsconfig.json` 配置正确，并且已经安装了 `@types/react` 和 `@types/react-dom`：

```bash
npm install --save-dev @types/react @types/react-dom
```

### React 版本冲突

POS UI 要求 React >= 18.0.0，如果你的项目使用的是旧版本，请升级：

```bash
npm install react@latest react-dom@latest
```

### 打包体积过大

确保你的打包工具支持 Tree Shaking，并且已经启用了生产模式：

```bash
# Vite
vite build

# Webpack
webpack --mode production
```

## 下一步

- 查看 [快速开始](/guide) 了解如何使用组件
- 查看 [主题配置](/guide/theme) 了解如何自定义主题

