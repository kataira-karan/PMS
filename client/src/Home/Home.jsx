import React, { useContext } from 'react'
import ProjectHeader from './ProjectHeader'
import SideBarOption from './SideBarOption'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { UserInfoContext } from '../Context/UserContext';
import { IoIosSettings } from "react-icons/io";
import SideBar from './SideBar';
import DashBoard from './DashBoard';
import Nav from '../Nav';
import { useEffect } from 'react';
import axios from 'axios';
import { getData } from '../Requests/getRequest';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// COMPTONENT IMPORTS
import Auth from '../auth/Auth';
import Backlogs from '../Pages/Backlogs';
import Boards from '../Pages/Boards';



const Home = () => {

  const {currentUser} = useContext(UserInfoContext);

  const changeProject = () =>{
      const projects = getData("")
  }

  // SO ONCE THE USER IS LOGGED IN WE CAN CALL 2-3 API TO GET DATA FOR USERS
  // CALL GETUSERDATA 
  // GET FIRST PROJECT OF USER SET IT AS CURRENT PROJECT
  // STORE FIRST PROJECT IN LOCAL STORAGE, ONLY SET THE FIRST PROJECT TO LOCALSTORAGE WHEN WE FIRST LOGIN
  // WHEN USER CHANGE A PROJECT WE CAN SET THAT PROJECT TO LOCALSTORGE
  // WHEN USER SELECT A DIFFERRENT PROJECT WE WILL CALL GETPROJECT API

//   const getProjects =  () =>{
//     const projects =  getData("http://localhost:5000/project/getUserProjects").then((data)=>{
//         setallProjects(data.data.projects)
//         console.log(allProjects)
// });

// }

// get project


  useEffect(() => {

    // getProjects()

  }, []);
  
  return (
    
    <>
      {
        currentUser 
        ?
        <div className='relative h-screen'> 
        <Router>
            <Switch>
           
                <div className='h-screen '>
                  <Nav></Nav>
                  <div className='flex'>
                    <SideBar></SideBar>
                    <div className=' w-full'> 
                      <Route exact path="/:projectKey/backlog">
                         <Backlogs></Backlogs>
                      </Route>
                    <Route exact path="/:key/board">
                        <Boards></Boards>
                    </Route>
                    </div>
                  </div>
                </div>
            </Switch>
          </Router>
      </div>
    :<Router>
      <Switch>
              <Route exact path="/login"> 
                <Auth></Auth>
              </Route>  
      </Switch>
      </Router>

      }
       {/* menu for mobile application */}
       <>
        {/* <div className='h-10h bg-blue-500 flex  justify-between  items-center px-4 md:hidden '>
              <span>
                PMS
              </span>

              <span>
                Menu
              </span>
            </div>

            <div className='absolute flex justify-evenly items-center w-screen h-10h bottom-0 right-0 bg-slate-400 md:hidden'>
              <div className='flex items-center justify-center border h-full w-full'>
                Profile
              </div>
              <div className='border h-full w-full'>
                Task
              </div>
              <div className='border h-full w-full'>
                Issue
              </div>
              <div className='border h-full w-full'>
                Setting
              </div>
            </div> */}

        </>
    </>


  )
}

export default Home
