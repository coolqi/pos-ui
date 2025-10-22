# 部署文档到 Vercel

## 方法一：通过 Vercel CLI（推荐）

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```

### 3. 部署文档
```bash
# 构建并部署
pnpm docs:deploy

# 或者分步执行
pnpm docs:build
vercel --prod
```

## 方法二：通过 Vercel 网站

### 1. 连接 GitHub 仓库
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 配置项目设置：
   - **Framework Preset**: Other
   - **Build Command**: `pnpm docs:build`
   - **Output Directory**: `docs-dist`
   - **Install Command**: `pnpm install`

### 2. 环境变量（如果需要）
在 Vercel 项目设置中添加环境变量。

## 方法三：GitHub Actions 自动部署

创建 `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Docs to Vercel

on:
  push:
    branches: [ main ]
    paths: [ 'docs/**', 'src/**', '.dumirc.ts' ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Install dependencies
        run: pnpm install
      - name: Build docs
        run: pnpm docs:build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./
```

## 配置说明

### vercel.json
- `buildCommand`: 构建命令
- `outputDirectory`: 输出目录
- `installCommand`: 安装命令
- `rewrites`: 路由重写规则

### .dumirc.ts
- `hash: true`: 启用文件哈希
- `history.type: 'hash'`: 使用哈希路由

## 注意事项

1. 确保 `docs-dist` 目录在 `.gitignore` 中
2. 如果使用自定义域名，需要在 Vercel 中配置
3. 构建失败时检查 Node.js 版本（推荐 18+）
4. 确保所有依赖都正确安装

## 故障排除

### 构建失败
```bash
# 清理缓存
rm -rf node_modules
rm -rf docs-dist
pnpm install
pnpm docs:build
```

### 路由问题
检查 `vercel.json` 中的 `rewrites` 配置是否正确。

### 样式问题
确保 CSS 文件正确构建到 `docs-dist` 目录中。
