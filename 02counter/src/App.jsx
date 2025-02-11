import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () =>{
    // counter = counter + 1
    if (counter>=20) {
      
    }else{
      setCounter(counter + 1)

      // It will increase value by 4 | but repeating above lines only increment by 1
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    
    }
  }

  const subtractValue = () =>{
    // counter = counter - 1
    if (counter<=0) {

    }else{

      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Work in progress...</h1>
      <h2>Counter Value: {counter} </h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={subtractValue}>Subtract value</button>
      
    </>
  )
}

export default App
