import { useEffect } from 'react';
import '../../../src/styles/globals.scss';

export default (props: any) => {
  // 同步 Dumi 的主题到组件
  useEffect(() => {
    const syncTheme = () => {
      const dumiTheme = document.documentElement.getAttribute('data-prefers-color');
      const theme = dumiTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    };

    // 初始同步
    syncTheme();

    // 监听主题变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-prefers-color') {
          syncTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-prefers-color'],
    });

    return () => observer.disconnect();
  }, []);

  return props.children;
};