module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'pos-ui-react',
        libraryDirectory: '',
        customName: (name) => {
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
        style: false, // 不自动导入样式
      },
      'pos-ui-react'
    ]
  ]
};
