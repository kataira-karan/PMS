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
    console.log("backlog container")
  }, []);

  return (
    <div className='p-16 h-screen  w-full' >
      <div className='flex flex-col'>
            <span className='font-medium text-lightGray'> Projects / {currentProject.name}</span>             
            <span className='font-medium text-4xl'>Sprints</span>
      </div>

          <div className='mt-8'>
            {
              x.map((s ,index)=>{
                return (
                 <BacklogContainer  key={index} isActive={false} isSprint={true}></BacklogContainer>
                )
              })
            }
          </div>

          {/* <div className='mt-8'>
            <div> 
            <span className='font-medium text-4xl'>Backlogs</span>
            <div id="backlog-list" className=''>

            </div>

            <CraeteIssueForm></CraeteIssueForm>

            </div>
          </div> */}


          <div className='mt-8'>
              <div className='flex flex-col'>
                <span className='font-medium text-lightGray'> Projects / {currentProject.name}</span>             
                <span className='font-medium text-4xl'>Backlogs</span>
              </div>
              <BacklogContainer isSprint={false} isActive={true} ></BacklogContainer>
          </div>
    </div>
  )
}

export default Backlogs
