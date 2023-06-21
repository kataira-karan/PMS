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


const Home = () => {

  const {currentUser} = useContext(UserInfoContext);

  return (
    
    <>
      {
        currentUser 
        ?
        <div>
        <div className='relative h-screen'> 
            <div className='h-10h bg-blue-500 flex  justify-between  items-center px-4 md:hidden '>
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
            </div>

            <div className='flex w-screen h-screen'>
            <DashBoard></DashBoard>

            </div >
      </div>
    </div> 
    :"Proteced Routes only"

      }
    
    </>


  )
}

export default Home
