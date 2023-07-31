    import React, { useContext } from 'react'
    import { IoIosArrowDown } from "react-icons/io";
    import { ProjectContext } from '../Context/ProjectContext';
    import { UserInfoContext } from '../Context/UserContext';
    import CraeteIssueForm from './CraeteIssueForm';
    import { gsap } from 'gsap';
    import { useEffect } from 'react';
    import { useState } from 'react';
    import { postData    } from '../Requests/postRequest';
    import { CiMenuKebab } from "react-icons/ci";
    import axios from 'axios';
    import IssueModel from './IssueModel';
    import DeleteAlert from './DeleteAlert';
import ListedIssue from './ListedIssue';
    

    const BacklogContainer = (props) => {


        const {isSprint , index , isActive, sprint , issues , currentIssue , setcurrentIssue } = props;
        const [isDisplay, setisDisplay] = useState(isActive);
        const {currentProject , changeCurrentProject} = useContext(ProjectContext);

        

        const handleIssueContainer = (e) =>{
            console.log("Closing Contanier")
            setisDisplay(!isDisplay);
        }

        const dragStarted = (e,issue )=>{
            console.log("drag started")
            e.dataTransfer.setData("issue" , JSON.stringify(issue))
        }

        const dragDropped =async (e)=>{
            e.preventDefault()
            console.log("Drap droped")
            console.log(isSprint)
            // ASK FOR CONFORMATION THAT YOU WANT TO TRASNFER ISSUE FROM BACKLOG TO SOME SPRINT
            console.log(JSON.parse(e.dataTransfer.getData("issue")))
            let issue  = JSON.parse(e.dataTransfer.getData("issue"))
            // call a method on backend to update the issue list of the project 

            // AFTER DROPPING WE WILL HAVE TO DELETE THE ISSUE FROM THE BACKLOG AND ADD IT TO THE SPRINT 
            // WE HAVE TO CREATE A START POINT AND END POINT 
            // DELETE ISSUE FROM START POINT AND ADD ISSUE TO END POINT
            console.log(JSON.parse(localStorage.getItem("token")))
                const data = await axios.post(`http://localhost:5000/project/sprint/${currentProject._id}/backlogtosprint/${sprint._id}/${issue._id}` , 
                JSON.stringify({Nothing : "nothinf"}),
                {   
                    headers :  {"Content-Type" : "application/json" ,
                    authorization : "Bearer " + JSON.parse(localStorage.getItem("token"))
                }})

                console.log(data)

        }
        const dragOver = (e)=>{
            e.preventDefault()
            console.log(e.dataTransfer.getData("issue"))
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
            
        }, [currentIssue]);

    return (
        <div  className='bg-darkGray rounded-xl py-2 my-4 px-4 w-full '>
            {
                
            }
             {/* <IssueModel issue={currentIssue}></IssueModel> */}
            {/* THIS CONTAINER DISPLAY BACKLOGS AND SPRINTS DYNAMICALLY, IF isSprint true , it will disaply sprints otherwise backlogs */}
            <div  className='flex justify-between rounded-xl py-2 px-4 hover:cursor-pointer hover:bg-darkGray'>
                <div onClick={handleIssueContainer} className='flex items-center gap-6'>
                    <span> <IoIosArrowDown></IoIosArrowDown> </span>
                    <span className='font-bold'>  {isSprint ? `Sprint ${sprint.name}` : "Backlog"}   </span>
                    <span> ({issues.length ? issues.length : 0  } Issue) </span>
                </div>

                <div className='flex items-center gap-2'>
                    <span className='bg-lightGray rounded p-2'>  {issues.length } </span>
                    <span className='bg-darkBlue rounded p-2 text-white'> 3 </span>
                    <span className='bg-green-500 rounded p-2 text-white'> 2 </span>
                    {
                        isSprint
                        ?
                        <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start Sprint</button> 
                        :
                        <button onClick={(e)=> createSprint(e)} type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Sprint</button> 
                    }
                    <span className='bg-lightGray p-2 rounded'> <CiMenuKebab></CiMenuKebab>  </span>
                    <div>

                    </div>
                </div>
            </div>
            {
                // TERNORY OPERATION TO OPEN AND CLOSE THE ACCORDIAN
                isDisplay 
                ?   
                <div id="dynamic-backlog">
                    <div className='mt-8 min-h-16'>
                    
                    {/* if sprint has issue , this is the place where it is going to be*/}

                        <div draggable className=' rounded-lg my-4 ' onDragOver={(e)=> dragOver(e)} onDrop={(e)=>dragDropped(e)} >
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
                                                <ListedIssue key={index} setcurrentIssue={setcurrentIssue} issue={issue} ></ListedIssue>
                                                )
                                        })
                                        }
                                        <DeleteAlert issue={currentIssue} setcurrentIssue={setcurrentIssue}  ></DeleteAlert>
  
                    </div>
            </div>
                                        

        {/* FORM TO CREATE AN ISSUE */}
            {
                isSprint 
                ?
                // SO IF WE ARE ADDING AN ISSUE TO A SPRINT WE NEED INFO ABOUT 
                // IN WHICH SPRINT WE ARE ADDING ISSUE TO SO WE HAVE TO PASS SPRINT
                <CraeteIssueForm sprint={sprint}    ></CraeteIssueForm>
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
