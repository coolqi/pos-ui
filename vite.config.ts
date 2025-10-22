/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import path from 'path';

// https://vite.dev/config/
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  if (isLibrary) {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api'],
            additionalData: (content, filename) => {
              // 排除 styles 目录下的文件，避免循环引用
              if (filename.includes('src/styles/')) {
                return content;
              }
              // 在其他 SCSS 文件中自动注入 SCSS 函数 和变量
              return `@use "@/styles/index.scss" as *;\n${content}`;
            }
          }
        }
      },
      build: {
        lib: {
          entry: {
            index: resolve(__dirname, 'src/index.ts'),
            // 纯组件 - 支持按需导入
            'components/button': resolve(__dirname, 'src/components/button/index.ts'),
            'components/themeToggle': resolve(__dirname, 'src/components/themeToggle/index.ts'),
            'components/icon': resolve(__dirname, 'src/components/icon/index.ts'),
            'components/toast': resolve(__dirname, 'src/components/toast/index.ts'),
            // 业务组件 (Blocks)
            'blocks/functionCard': resolve(__dirname, 'src/blocks/functionCard/index.ts'),
            // 主题相关
            'contexts/theme': resolve(__dirname, 'src/contexts/ThemeContext.tsx'),
            'hooks/useTheme': resolve(__dirname, 'src/hooks/useTheme.tsx'),
          },
          name: 'PosUI',
          fileName: (format, entryName) => `${entryName}.${format}.js`,
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            },
            // 启用代码分割，实现真正的按需加载
                manualChunks: (id) => {
                  // 将每个组件分割成独立的chunk
                  if (id.includes('components/button')) return 'button';
                  if (id.includes('components/themeToggle')) return 'themeToggle';
                  if (id.includes('components/icon')) return 'icon';
                  if (id.includes('components/toast')) return 'toast';
                  if (id.includes('blocks/functionCard')) return 'functionCard';
                  if (id.includes('contexts/theme')) return 'theme';
                  if (id.includes('hooks/useTheme')) return 'useTheme';
                }
          }
        }
      }
    };
  }

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: (content, filename) => {
            // 排除 styles 目录下的文件，避免循环引用
            if (filename.includes('src/styles/')) {
              return content;
            }
            // 在其他 SCSS 文件中自动注入 SCSS 函数 和变量
            return `@use "@/styles/index.scss" as *;\n${content}`;
          }
        }
      }
    },
    test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
  };
});