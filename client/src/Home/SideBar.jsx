import React from 'react'
import ProjectHeader from './ProjectHeader'
import SideBarOption from './SideBarOption'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";

const SideBar = () => {
  return (
    <>
        {/* sidebar will hide in mobile view */}
        <div className='hidden md:flex min-w-250 md:flex-col py-16 px-8 md:20w lg:w-1/6 md:bg-lightGray ' >
            {/* HHEADER OF PROJECT */}
            <ProjectHeader></ProjectHeader>
            <SideBarOption text="Home" icon={<BiHomeAlt></BiHomeAlt>} ></SideBarOption>
            <SideBarOption text="Board" icon={<MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>} ></SideBarOption>
            <SideBarOption text="Tasks" icon={<FaTasks></FaTasks>} ></SideBarOption>
            <SideBarOption text="Setting" icon={<IoIosSettings></IoIosSettings>} ></SideBarOption>    
        </div>
    </>
  
  )
}

export default SideBar
