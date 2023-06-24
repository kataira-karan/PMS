import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {Link} from "react-router-dom"
import { ProjectContext } from '../Context/ProjectContext';

const SideBarOption = (props) => {

    const { icon , text ,projectKey } = props;
    const {currentProject} = useContext(ProjectContext);

    useEffect(() => {
    }, []);

  return (
    <Link to={`/${currentProject.key}/${text.toLowerCase()}`} className='flex my-2 py-4 pl-2 capitalize rounded-md items-center gap-2 hover:cursor-pointer hover:bg-lightBlue  '>
       <span className='text-2xl '> {icon}  </span> 
      <span> {text  ? text : "Title"} </span>
    </Link>
  )
}

export default SideBarOption
