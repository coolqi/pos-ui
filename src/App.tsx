import { Button } from './components/button'
import ThemeToggle from './components/themeToggle'

function App() {

  return (
    <div className="app">
      <header className="header">
        <ThemeToggle />
      </header>
      
      <main>
        <Button>Button primary</Button>
        <Button variant="secondary">Button secondary</Button>
        <Button outline>Button outline</Button>
        <Button variant="danger">Button danger</Button>
        <Button variant="text">Button text</Button>
        <Button variant="link">Button link</Button>
        <Button variant="mix">Button mix</Button>
      </main>
    </div>
  )
}

export default App
