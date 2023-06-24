import React, { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectContext';


const ProjectHeader = () => {

  const {currentProject} = useContext(ProjectContext);


  return (
    <div className='flex justify-evenly h-7h   p-2 rounded-lg bg-darkGray '>
      <div className=' w-1/2'>
        <img className='h-full w-auto object-cover rounded-lg' src='https://img.freepik.com/free-vector/lovely-hand-drawn-space-rocket-composition_23-2147908020.jpg?w=2000'/>
      </div>

      <div className='w-5/6'>
        <span className='text-black font-boldest text-ellipsis overflow-hidden hover:cursor-pointer '> {currentProject.key} </span>
        <span className='text-sm'> SoftwareProject </span>
      </div>
    </div>
  )
}

export default ProjectHeader
