import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Gallery from './components/Gallery'
import Credits from './components/Credits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Gallery />
      <Credits />
    </div>
  )
}

export default App
