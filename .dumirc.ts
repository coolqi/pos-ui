import { defineConfig } from 'dumi';

export default defineConfig({
  // 网站标题
  title: 'POS UI',
  
  // 网站 favicon
  favicons: ['/vite.svg'],
  
  // 输出路径
  outputPath: 'docs-dist',
  
  // 主题配置
  themeConfig: {
    name: 'POS UI',
    logo: '/vite.svg',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/button' },
      { title: 'GitHub', link: 'https://github.com/coolqi/pos-ui' },
    ],
    sidebar: {
      '/guide': [
        {
          title: '介绍',
          children: [
            { title: '快速开始', link: '/guide' },
            { title: '安装', link: '/guide/installation' },
            { title: '主题配置', link: '/guide/theme' },
          ],
        },
      ],
      '/components': [
        {
          title: '通用组件',
          children: [
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Icon 图标', link: '/components/icon' },
            { title: 'Toast 提示框', link: '/components/toast' },
          ],
        },
        {
          title: '业务组件',
          children: [
            { title: 'FunctionCard 功能卡片', link: '/components/functionCard' },
          ],
        },
      ],
    },
    footer: 'Copyright © 2025 | Powered by POS UI',
    socialLinks: {
      github: 'https://github.com/coolqi/pos-ui',
    },
  },
  
  // 配置 alias
  alias: {
    '@': '/src',
    'pos-ui-react': '/src/index.ts',
    'pos-ui-react/style.css': '/src/styles/globals.scss',
  },
  
  // 样式配置
  styles: [
    `
      .dumi-default-header-left {
        width: auto !important;
      }
      .dumi-default-previewer-demo {
        padding: 24px;
      }
    `,
  ],
  
  // 配置 resolve
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'src/components' },
      { type: 'component', dir: 'src/blocks' },
    ],
  },
  
  // 配置 CSS 预处理器
  cssLoader: {},
  
  // 配置 extraBabelPlugins
  extraBabelPlugins: [],
  
  // 配置 extraBabelPresets
  extraBabelPresets: [],
  
  // 配置 mfsu
  mfsu: {},
  
  // 配置 esbuild
  jsMinifier: 'esbuild',
  
  // 配置 base
  base: '/',
  publicPath: '/',
  
  // 配置 exportStatic
  exportStatic: {},
  
  // Vercel 部署配置
  hash: true,
  history: {
    type: 'hash',
  },
});

