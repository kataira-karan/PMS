import {React , useContext} from 'react'
import { UserInfoContext } from '../Context/UserContext'
import { useEffect } from 'react';
import { ProjectContext } from '../Context/ProjectContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const DashBoard = () => {

  const {currentUser} = useContext(UserInfoContext);
  const {currentProject} = useContext(ProjectContext)

  useEffect(() => {

    // console.log(currentUser)

  }, []);

  return (
     <div className='w-70w h-screen py-16 px-8'>

     {/* still remain in mobile view bt column view only */}
     <div className='flex'>
     <span className='flex flex-row text-3xl font-bold mr-8 '>Project Board</span>
       <div className=' translate-x-2 border border-black drop-shadow-2xl flex center-items justify-center text-white rounded-full p-2 bg-red-800 '>
         {currentUser ? currentUser.name : "No name"}
       </div>
    
     </div>

     <div className='mt-8'>

        <>
        
        </>

       <div className='h-50h bg-lightGray rounded-lg p-4'>
           <span className=''>  To Do  </span>
       </div>
     </div>
     
   </div>
  )
}

export default DashBoard
