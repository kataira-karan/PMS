import React, { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectContext'
import BacklogContainer from '../Components/BacklogContainer';
import CraeteIssueForm from '../Components/CraeteIssueForm';

const Backlogs = () => {

  const {currentProject} = useContext(ProjectContext);

  return (
    <div className='p-16' >


          <div className='flex flex-col'>
            <span className='font-normal text-darkGray'> Projects / {currentProject.name}</span>             
            <span className='font-medium text-4xl'>Bascklogs</span>
          </div>

          <div className='mt-8'>
            <BacklogContainer isSprint={true}></BacklogContainer>
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
              <BacklogContainer isSprint={false} ></BacklogContainer>
          </div>
    </div>
  )
}

export default Backlogs
