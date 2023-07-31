import React, { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectContext'
import BacklogContainer from '../Components/BacklogContainer';
import CraeteIssueForm from '../Components/CraeteIssueForm';
import { useEffect } from 'react';
import { useState } from 'react';

const Backlogs = () => {

  const {currentProject} = useContext(ProjectContext);
  const [currentIssue, setcurrentIssue] = useState( );
;
  const changeCurrentIssue = (issue) =>{
    setcurrentIssue(issue)
  }


  useEffect(() => {
    console.log(currentIssue)
  }, [currentIssue]);

  return (
    <div className='p-16 h-screen  w-full' >
      <div className='flex flex-col'>
            <span className='font-medium text-lightGray'>  {currentProject.name} / Sprints </span>             
      </div>

          {/* DISPLAYING SPRINTS FROM CURRENT PROJECT */}
          <div className='mt-8'>
            {
               
              currentProject.sprints.map((sprint ,index)=>{
                return (
                 <BacklogContainer currentIssue={currentIssue} setcurrentIssue={setcurrentIssue} key={index} isActive={false} isSprint={true}  sprint={sprint} issues={sprint.issues}  ></BacklogContainer>
                )
              })
            }
          </div>
          
          {/* DISPLAYING BACKLOGS FROM CURRENT PROJECT */}
          <div className='mt-8'>
              <div className='flex flex-col'>
                <span className='font-medium text-lightGray'> {currentProject.name} / Backlogs</span>             
              </div>
              <BacklogContainer currentIssue={currentIssue} setcurrentIssue={setcurrentIssue} isSprint={false}  isActive={true} issues={currentProject.issues} ></BacklogContainer>
          </div>
    </div>
  )
}

export default Backlogs
