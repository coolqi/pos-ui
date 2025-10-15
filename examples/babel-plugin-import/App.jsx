import React from 'react';
import { ThemeProvider, Button, Card, ThemeToggle } from 'pos-ui';

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableLocalStorage={true}>
      <div style={{ padding: '2rem' }}>
        <h1>按需导入示例</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <ThemeToggle />
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <Button variant="primary">主要按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="outline">轮廓按钮</Button>
        </div>
        
        <Card title="卡片标题" subtitle="卡片副标题">
          <p>这是卡片内容。使用 babel-plugin-import 配置后，</p>
          <p>可以像这样简洁地导入组件：</p>
          <pre>{`import { Button, Card, ThemeToggle } from 'pos-ui';`}</pre>
          <p>构建工具会自动转换为按需导入，只加载使用的组件。</p>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
