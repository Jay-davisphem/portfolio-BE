import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)

  useEffect(() => {
    aFunc().then(() => setLoading(false))
  })

  function aFunc(){
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  if(loading)
    return <h1>You you yaafoiafu </h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)} className='text-black text-5xl'>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
