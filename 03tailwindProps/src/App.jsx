import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Alpha203",
    age: 20,
  }

  let newArr = [2, 0, 3, 2, 0]

  return (
    <>
    <h1 className='bg-gray-800 text-white p-4 rounded-2xl'>Tailwind CSS</h1>
    <div className='flex flex-row justify-center items-center space-x-4'>

    <Card username="Alpha203" btnText="Alpha" />
    <Card username="Delta312"  />
    <Card username="Ghost220" btnText="Ghost" />
    </div>
      
    </>
  )
}

export default App
