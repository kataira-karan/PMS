import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../Context/ProjectContext'
import { UserInfoContext } from '../Context/UserContext'
import Board from '../Components/Board'
import { getData } from '../Requests/getRequest'
import { useState } from 'react'

const Boards = () => {

  // SO WHEN WE OPEN THIS PAGE WE NEED TO FETCH INFORMATION OF THE ACTIVE SPRINT
  // SO WE CAN DISPLAY ALL THE TASK FOR THAT SPRITN 

  const {currentProject} = useContext(ProjectContext)
  const {currentUser} = useContext(UserInfoContext)
  const [activeSprint, setactiveSprint] = useState(null);

  const fetchActiveSprint = () =>{

    currentProject.sprints.map((project)=>{
      if(project.status){
        setactiveSprint(project)
        return;
      }
    })

      
  }

  useEffect(() => {

    fetchActiveSprint();
    console.log(activeSprint)
  }, [activeSprint]);

  return (
    <div className='p-16 h-screen  w-full' >
       <div className='flex flex-col'>  
            <span className='font-medium text-lightGray'>  {currentProject.name} / Sprints </span>             

            {
            activeSprint
            ?
            <div className='flex gap-4 mt-8  '>
              
            <Board title="To Do" issues={ activeSprint.issues }  > </Board>
            <Board title="In Progress" issues={ activeSprint.issues } > </Board>
            <Board title="Done" issues={ activeSprint.issues } > </Board>
            </div>
            :
            "NO ACTIVE SPRINT"

            }
            
           
      </div>  
    </div>
  )
}

export default Boards
