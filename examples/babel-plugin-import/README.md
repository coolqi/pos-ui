# Babel Plugin Import 示例

这个示例展示了如何使用 `babel-plugin-import` 实现 `import { Button } from 'pos-ui'` 的按需加载。

## 配置步骤

### 1. 安装依赖

```bash
npm install -D babel-plugin-import
```

### 2. 配置 Babel

创建 `babel.config.js` 文件（已包含在此示例中）。

### 3. 使用组件

```jsx
import { Button, Card, ThemeToggle } from 'pos-ui';
```

## 转换效果

### 转换前

```jsx
import { Button, Card, ThemeToggle } from 'pos-ui';
```

### 转换后

```jsx
import Button from 'pos-ui/components/button';
import ThemeToggle from 'pos-ui/components/themeToggle';
```

## 验证按需加载

1. 构建项目
2. 检查生成的 bundle 大小
3. 确认只包含使用的组件

## 注意事项

- 样式需要手动导入：`import 'pos-ui/dist/pos-ui.css'`
- 确保 TypeScript 配置正确以获得类型提示
- 不同构建工具可能需要不同的配置方式
