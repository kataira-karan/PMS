import React from 'react'


const ProjectHeader = (props) => {

  const {projectName} = props

  return (
    <div className='flex justify-evenly h-7h   p-2 rounded-lg bg-darkGray '>
      <div className=' w-1/2'>
        <img className='h-full w-auto object-cover rounded-lg' src='https://img.freepik.com/free-vector/lovely-hand-drawn-space-rocket-composition_23-2147908020.jpg?w=2000'/>
      </div>

      <div>
        <span className='text-black font-boldest'>{projectName}</span>
        <span className='text-sm'> SoftwareProject </span>
      </div>
    </div>
  )
}

export default ProjectHeader
