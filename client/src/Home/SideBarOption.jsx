import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";

const SideBarOption = (props) => {

    const { icon , text } = props;

  return (
    <div className='flex my-2 py-4 pl-2 rounded-md items-center gap-2 hover:cursor-pointer hover:bg-lightBlue  '>
       <span className='text-2xl '> {icon}  </span> 
      <span> {text  ? text : "Title"} </span>
    </div>
  )
}

export default SideBarOption
