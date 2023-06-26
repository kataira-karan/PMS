import React, { useContext } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { ProjectContext } from '../Context/ProjectContext';
import { UserInfoContext } from '../Context/UserContext';
import CraeteIssueForm from './CraeteIssueForm';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useState } from 'react';
import { postData    } from '../Requests/postRequest';

const BacklogContainer = (props) => {


    const {isSprint , index , isActive, sprint , issues } = props;
    const [isDisplay, setisDisplay] = useState(isActive);
    const {currentProject , changeCurrentProject} = useContext(ProjectContext);

    const closeBacklogContainer = (e) =>{
        console.log("Closing Contanier")
        // console.log(e); 
        setisDisplay(!isDisplay);

        
    }

    const dragStarted = (e,issue )=>{
        console.log("drag started")
        e.dataTransfer.setData("issue" , issue)
        }

    const dragDropped =(e)=>{
        e.preventDefault()
        console.log("Drap droped")
        // call a method on backend to update the issue list of the project 

    }
    const dragOver = (e)=>{
        e.preventDefault()
        console.log("dragging Over")
    }

    const createSprint = (e) =>{
        e.preventDefault();
        console.log("Creating sprint")
        let sprintName = `${currentProject.sprints.length}`;
        postData(`http://localhost:5000/project/sprint/${currentProject._id}/createSprint`,{ "name" : sprintName ,"project": currentProject._id }).then((data)=>{
            console.log(data)
            changeCurrentProject(data.data.project)
        })

    }


    useEffect(() => {
        // console.log(sprint)
    }, []);

  return (
    <div  className='bg-darkGray rounded-xl py-2 my-4 px-4 w-full '>
        {/* THIS CONTAINER DISPLAY BACKLOGS AND SPRINTS DYNAMICALLY, IF isSprint true , it will disaply sprints otherwise backlogs */}
        <div  className='flex justify-between rounded-xl py-2 px-4 hover:cursor-pointer hover:bg-darkGray'>
            <div onClick={closeBacklogContainer} className='flex items-center gap-6'>
                <span> <IoIosArrowDown></IoIosArrowDown> </span>
                <span className='font-bold'>  {currentProject.name} / {isSprint ? "Sprint" : "Backlog"}   </span>
                <span> (0 Issue) </span>
            </div>

            <div className='flex items-center gap-2'>
                <span className='bg-lightGray rounded p-2'> 5 </span>
                <span className='bg-darkBlue rounded p-2 text-white'> 3 </span>
                <span className='bg-green-500 rounded p-2 text-white'> 2 </span>
                {
                    isSprint
                    ?
                    <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start Sprint</button> 
                    :
                    <button onClick={(e)=> createSprint(e)} type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Sprint</button> 
                }
            </div>
        </div>
        {
            // TERNORY OPERATION TO OPEN AND CLOSE THE ACCORDIAN
            isDisplay 
            ?   
            <div id="dynamic-backlog">
                <div className='mt-8 min-h-16'>
                
                {/* if sprint has issue , this is the place where it is going to be*/}

                     <div draggable className='bg-lightGray rounded-lg my-4 ' onDragOver={(e)=> dragOver(e)} onDrop={(e)=>dragDropped(e)} >
                    {/* if sprint doesn not have any task use this line */}
                                    
                                    {/* DISPLAYING ALL THE ISSUES FOR THE BACKLOGS AND SPRINTS  */}
                                    {
                                    issues && issues.length === 0 
                                        ?
                                        <span className='p-4 font-normal text-sm text-gray-400  flex  justify-center text-center items-center w-full '>
                                        You can start a sprint here,
                                        You can add an issue using drag and drop from the backlog section or you can just create an issue here.
                                     </span>
                                        :
                                    issues.map((issue, index)=>{
                                        return (
                                            <div draggable key={index} onDragStart={(e)=> dragStarted(e,"issue") } className='w-full bg-white p-2 my-2 rounded-lg hover:cursor-pointer'> {issue.name} </div>
                                            )
                                    })
                                    }
                </div>
        </div>
       

       {/* FORM TO CREATE AN ISSUE */}
        {
            isSprint 
            ?
            // SO IF WE ARE ADDING AN ISSUE TO A SPRINT WE NEED INFO ABOUT 
            // IN WHICH SPRINT WE ARE ADDING ISSUE TO SO WE HAVE TO PASS SPRINT
            <CraeteIssueForm sprint={sprint}  ></CraeteIssueForm>
            :
            // WE ARE DIRECTLY ADDING ISSUE TO BACKLOGS
            <CraeteIssueForm sprint={sprint}></CraeteIssueForm>
        }
            </div>             
            :
            null

        }
        
        

    </div>
  )
}

export default BacklogContainer
