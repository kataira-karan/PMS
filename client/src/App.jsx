import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './auth/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Switch>

      <Route exact path="/login"> 
          <Auth></Auth>
        </Route>  

        <Route exact path="/">
          <Home></Home>
        </Route>

        

        

      </Switch>
    </Router>

  )
}

export default App
