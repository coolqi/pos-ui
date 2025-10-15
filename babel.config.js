module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'pos-ui',
        libraryDirectory: '',
        customName: (name) => {
          // 映射组件名到对应的路径
          const componentMap = {
            Button: 'components/button',
            ThemeToggle: 'components/themeToggle',
            ThemeToggleWithProps: 'components/themeToggle/ThemeToggleWithProps',
            UserProfile: 'blocks/userProfile',
            ThemeProvider: 'contexts/theme',
            useTheme: 'hooks/useTheme',
          };
          
          return componentMap[name] ? `pos-ui/${componentMap[name]}` : `pos-ui/${name.toLowerCase()}`;
        },
        style: false, // 不自动导入样式，让用户手动导入
      },
      'pos-ui'
    ]
  ]
};
