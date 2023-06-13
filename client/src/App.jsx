import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './auth/Auth'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
   {/* <Auth></Auth> */}

   <Home></Home>
    </div>
  )
}

export default App
