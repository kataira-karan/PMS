import React, { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectContext'
import BacklogContainer from '../Components/BacklogContainer';
import CraeteIssueForm from '../Components/CraeteIssueForm';
import { useEffect } from 'react';
import { useState } from 'react';

const Backlogs = () => {

  const {currentProject} = useContext(ProjectContext);
  const [x, setx] = useState([1,2,3]);
  useEffect(() => {
  }, []);

  return (
    <div className='p-16 h-screen  w-full' >
      <div className='flex flex-col'>
            <span className='font-medium text-lightGray'> Projects / {currentProject.name}</span>             
            <span className='font-medium text-4xl'>Sprints</span>
      </div>

          {/* DISPLAYING SPRINTS FROM CURRENT PROJECT */}
          <div className='mt-8'>
            {
              currentProject.sprints.map((sprint ,index)=>{
                return (
                 <BacklogContainer  key={index} isActive={false} isSprint={true}  sprint={sprint} issues={sprint.issues}  ></BacklogContainer>
                )
              })
            }
          </div>
          
          {/* DISPLAYING BACKLOGS FROM CURRENT PROJECT */}
          <div className='mt-8'>
              <div className='flex flex-col'>
                <span className='font-medium text-lightGray'> Projects / {currentProject.name}</span>             
                <span className='font-medium text-4xl'>Backlogs</span>
              </div>
              <BacklogContainer isSprint={false} isActive={true} issues={currentProject.issues} ></BacklogContainer>
          </div>
    </div>
  )
}

export default Backlogs
