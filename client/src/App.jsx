import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Auth from './auth/Auth'
import { UserProvider } from './Context/UserContext'
import { ProjectProvider } from './Context/ProjectContext'
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Backlogs from './Pages/Backlogs'
import Nav from './Nav'
import SideBar from './Home/SideBar'
import Boards from './Pages/Boards'

function App() {


  return (
      <UserProvider>
        <ProjectProvider>
            <Home></Home>
        </ProjectProvider>
      </UserProvider>
   )
}

export default App
