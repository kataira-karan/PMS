import React, { useContext } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { ProjectContext } from '../Context/ProjectContext';
import { UserInfoContext } from '../Context/UserContext';
import CraeteIssueForm from './CraeteIssueForm';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useState } from 'react';

const BacklogContainer = (props) => {


    const {isSprint , index , isActive} = props;
    const [isDisplay, setisDisplay] = useState(isActive);
    const {currentProject} = useContext(ProjectContext);



    const closeBacklogContainer = (e) =>{
        console.log("Closing Contanier")
        console.log(e); 
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

    useEffect(() => {
        localStorage.setItem("currentProject" ,JSON.stringify(currentProject))
        console.log(currentProject)
    }, []);

  return (
    <div  className='bg-darkGray rounded-xl py-2 my-4 px-4 w-full '>
        <div onClick={closeBacklogContainer} className='flex justify-between rounded-xl py-2 px-4 hover:cursor-pointer hover:bg-darkGray'>
            <div className='flex items-center gap-6'>
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
                    <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Sprint</button> 
                }
            </div>
        </div>
        {
            isDisplay 
            ?   
            <div   id="dynamic-backlog">
        <div className='mt-8 min-h-16'>
                
                {/* if sprint has issue , this is the place where it is going to be*/}

                <div draggable className='bg-lightGray rounded-lg my-4 ' onDragOver={(e)=> dragOver(e)} onDrop={(e)=>dragDropped(e)} >
                    {/* if sprint doesn not have any task use this line */}
                    <span className='p-4 font-normal text-sm text-gray-400  flex  justify-center text-center items-center w-full '>
                        You can start a sprint here,
                        You can add an issue using drag and drop from the backlog section or you can just create an issue here.

                    </span>
                        
                </div>
        </div>
       
       <CraeteIssueForm></CraeteIssueForm>
        {
            !isSprint   
            ?
            <div>
                {
                    currentProject ?
                      currentProject.issues.map((issue) =>{
                        return (
                            <div draggable onDragStart={(e)=> dragStarted(e,"issue") } className='w-full bg-white p-2 my-2 rounded-lg hover:cursor-pointer'> {issue.name} </div>
                        )

                      })
                    :
                    null
                }
            </div>
            :
             null
        }
        
        </div>             
            :
            null

        }
        
        

    </div>
  )
}

export default BacklogContainer
