import React from 'react'
import ProjectHeader from './ProjectHeader'
import SideBarOption from './SideBarOption'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { ProjectContext } from '../Context/ProjectContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserInfoContext } from '../Context/UserContext';

const SideBar = () => {

  const {currentProject} = useContext(ProjectContext);
  const {currentUser} = useContext(UserInfoContext);

  useEffect(() => {
  }, []);

  return (
    <>
      {
        currentUser
        ?
        <>
         {/* sidebar will hide in mobile view */}
         <div className='hidden md:flex min-w-250 md:flex-col py-16 px-8 md:20w lg:w-1/6 md:bg-lightGray ' >
            {/* HHEADER OF PROJECT */}
            <ProjectHeader projectName={currentProject.name  } ></ProjectHeader>
            <SideBarOption projectKey={currentProject.key} text="Home" icon={<BiHomeAlt></BiHomeAlt>} ></SideBarOption>
            <SideBarOption projectKey={currentProject.key} text="Board" icon={<MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>} ></SideBarOption>
            <SideBarOption projectKey={currentProject.key} text="Backlog" icon={<FaTasks></FaTasks>} ></SideBarOption>
            <SideBarOption projectKey={currentProject.key} text="Setting" icon={<IoIosSettings></IoIosSettings>} ></SideBarOption>    
        </div>
        </>
        :
        null
      }
       
    </>
  
  )
}

export default SideBar
