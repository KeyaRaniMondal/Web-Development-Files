import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Person></Person>
      <Developer></Developer>
      <Device name='Laptop' price='12000'></Device>
      <Device name='mobile' price='10000'></Device>
      <Device name='computer' price='42000'></Device>
      <Device name='ipad' price='200000'></Device>

{/* creating file called TODO */}
      <Todo task="Learn React"></Todo>
    </>

  )
}

function Person(){
   return <h1>I am a Web-developer</h1>
}

function Developer(){
  const devstyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple'
  }
  return(
    <div style={devstyle}>
      <h5>Dev</h5>
      <p>Coding</p>
    </div>
  )
}

function Device(props){
  console.log(props)
  return(
    <h2>This device:{props.name} price:{props.price}</h2>
  )
}
export default App
