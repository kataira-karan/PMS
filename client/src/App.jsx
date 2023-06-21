import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Auth from './auth/Auth'
import { UserProvider } from './Context/UserContext'
import { ProjectProvider } from './Context/ProjectContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Backlogs from './Home/Backlogs'
import Nav from './Nav'
import SideBar from './Home/SideBar'
import Boards from './Home/Boards'

function App() {


  return (

    <UserProvider>
     <ProjectProvider>
         <Router>
            <Switch>
              <Route exact path="/login"> 
                <Auth></Auth>
              </Route>  

                <div className='h-screen'>
                  <Nav></Nav>
                  <div className='flex'>
                    <SideBar></SideBar>
                    <div>
                      <Route exact path="/:projectKey/backlogs">
                         <Backlogs></Backlogs>
                      </Route>
                    <Route exact path="/:key/boards">
                        <Boards></Boards>
                    </Route>
                    </div>
               
                  </div>
                
                  
                </div>
             
            </Switch>
          </Router>
     </ProjectProvider>
    </UserProvider>

  )
}

export default App
