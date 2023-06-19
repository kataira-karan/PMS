import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Auth from './auth/Auth'
import { UserProvider } from './Context/UserContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home'

function App() {

  return (

    <UserProvider>
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
    </UserProvider>

  )
}

export default App
