import { useState } from 'react'
import Navigation from './components/navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1 class="navbar-brand">Jared Elliott</h1>
        <Navigation />
      </nav>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <p class="m-0 p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
    </>
  )
}

export default App
