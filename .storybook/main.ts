import type { StorybookConfig } from '@storybook/react-vite';
import path from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "typescript": {
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "shouldRemoveUndefinedFromOptional": true,
      "propFilter": (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  "viteFinal": async (config) => {
    config.css = {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: (content: string, filename: string) => {
            // 排除 styles 目录下的文件，避免循环引用
            if (filename.includes('src/styles/')) {
              return content;
            }
            // 在其他 SCSS 文件中自动注入 SCSS 函数、mixins 和变量
            return `@use "@/styles/index.scss" as *;\n${content}`;
          }
        },
      },
    };
    config.resolve = {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    };
    return config;
  }
};
export default config;