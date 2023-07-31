import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { GrClose , GrCheckmark } from "react-icons/gr";
import { ProjectContext } from '../Context/ProjectContext';
import { postData } from '../Requests/postRequest';

const IssueModel = ({issue}) => {

 const [isDescriptionFocused, setisDescriptionFocused] = useState(false);
 const [isTitleFouce, setisTitleFouce] = useState(false);
 const {currentProject} = useContext(ProjectContext);
 const [updatedIssue, setupdatedIssue] = useState({ name: issue.name , description:issue.description, status:"" });
 


 const typeDescription = () =>{
        setisDescriptionFocused(true)
       console.log("Type Description")
 } 

 const closeIssueModel = () =>{

    // setupdatedIssue({name: "", description:"" , status : ""})
    document.getElementById("issue-model").close()

 }

const removeFocsueFromDescription = () =>{
    setisDescriptionFocused(false)
 }

 const removeFouce = (isTitle) =>{

  if(isTitle){
    setisTitleFouce(false)
  }else{
    setisDescriptionFocused(false)
  }
 }

 const focuseField = (isTitle) =>{

    if(isTitle){
      setisTitleFouce(true)
      setisDescriptionFocused(false)
    }else{
      setisDescriptionFocused(true)
      setisTitleFouce(false)
    }

 }

 const updateIssue = (e) =>{

    e.preventDefault()  
    console.log(updatedIssue)
    postData(`http://localhost:5000/project/issue/${currentProject._id}/${issue._id}/updateIssue` ,{issue : updatedIssue} )
    .then((res)=>{
      console.log(res)
    })

 }

  useEffect(() => {
    console.log(issue)
  }, [issue]);

  return (
    <dialog id="issue-model" className='rounded p-8 w-50w'>
      <span className='font-bold first-letter text-2xl  '> {currentProject.name} / Issues </span>
      <hr className='mt-2'></hr>
      <div className='flex justify-between items-center mt-4 '>

          <div className=' relative '>
          <input  value={updatedIssue.name} onChange={(e) => setupdatedIssue({...issue , name : e.target.value}) }  onFocus={() =>  focuseField(true)}  className='font-medium capitalize text-gray-900 hover:bg-darkGray p-2 rounded hover:ease-in ease-out duration-300 ' /> 
   
          {/* IF THE TITLE IS FOCUSED WE HAVE TO SHOW SAVE AND CANCEL OPTION */}
            {
              isTitleFouce
              ?
              <div className='flex ease-in-out duration-700 mt-2 gap-2 absolute right-0'>
                <span className='p-2 bg-darkGray rounded cursor-pointer '> 
                  <GrCheckmark></GrCheckmark>
                </span>
                <span onClick={()=>removeFouce(true)} className='p-2 bg-darkGray rounded cursor-pointer '>    
                  <GrClose ></GrClose>
                </span>
              </div>
            :
            null  
            }
            
            {/* WE WILL HAVE TO CHANGE THE LOOK FOR THIS COMPONENT IN FUTURE */}
          </div>
            <select value={updatedIssue.status} onChange={(e) => setupdatedIssue({...issue , status : e.target.value}) } className= 'focus:ring-blue-500 focus:border-blue-500 p-2 rounded border-none'>
              <option value="To Do" className='bg-gray-500 p-2 rounded '> To Do </option>
              <option value="In Progress" className='bg-blue-500 p-2'> In Progress </option>
              <option value="Done" className='bg-green-500 p-2'> Done </option>
            </select>
      </div>

      <div className='mt-8'>
          <textarea className='mt-2 p-4 w-4/5 ' row="20" col="20" value={issue.description}  onChange={(e) => setupdatedIssue({...issue , description : e.target.value}) } onFocus={() =>  focuseField(false)}  placeholder='Add a description'></textarea>
          {/* IF THE DESCRIPTION IS FOCUSED WE HAVE TO SHOW SAVE AND CANCEL OPTION */}
          { isDescriptionFocused ?  
              <div className='flex gap-3'>  
                 <button type="button" className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                 <button type="button" onClick={()=>removeFouce(false)} className="flex justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
              </div>
           : null  }
      </div>
      
      
      <div className='flex mt-4'>
        <button type="button" onClick={(e) => updateIssue(e) }  className="flex justify-center rounded-md w-2/12  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        <button type="button" onClick={closeIssueModel} className="flex w-2/12 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
      </div>
      
    </dialog>
  )
}

export default IssueModel
