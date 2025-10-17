import { Button } from './components/button'
import ThemeToggle from './components/themeToggle'
import { useTheme } from './hooks/useTheme'
import { Icon } from './components/icon'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" style={{ 
      padding: '40px',
      minHeight: '100vh',
      backgroundColor: 'var(--pos-ui-bg-color)',
      color: 'var(--pos-ui-text-primary)',
      transition: 'all 0.3s ease'
    }}>
      <header className="header" style={{ 
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>POS UI Components</h1>
        
        {/* 方式 1: 使用 ThemeToggle 组件 */}
        <ThemeToggle />
      </header>
      
      <main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h2>当前主题: {theme}</h2>
          
          {/* 方式 2: 使用自定义按钮切换 */}
          <Button 
            variant="primary" 
            onClick={toggleTheme}
            icon={<Icon name={theme === 'light' ? 'moon' : 'sun'} size={16} />}
          >
            切换到 {theme === 'light' ? '深色' : '浅色'}模式
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="mix">Mix</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
          <Button variant="link">Link</Button>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" outline>Primary Outline</Button>
          <Button variant="danger" outline>Danger Outline</Button>
          <Button color="cyan" outline>Cyan Outline</Button>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" outline solidOnPressed>
            Solid on Pressed
          </Button>
          <Button variant="danger" outline solidOnPressed>
            Danger Solid on Pressed
          </Button>
        </div>
      </main>
    </div>
  )
}

export default App
