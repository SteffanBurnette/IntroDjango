import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={setCount(count+1)}>
      <img src={reactLogo} alt="React Logo" />
      Click me
    </button>   
      
    </>
  )
}

export default App
