import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Hi, I'm [Your Name] 👋</h1>
        <p>Welcome to my portfolio!</p>
        <ul>
          <li>💼 Projects</li>
          <li>📄 Resume</li>
          <li>📧 Contact</li>
        </ul>
      </div>
    </>
  )
}

export default App
