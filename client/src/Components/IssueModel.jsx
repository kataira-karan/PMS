import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { GrClose , GrCheckmark } from "react-icons/gr";
import { ProjectContext } from '../Context/ProjectContext';

const IssueModel = ({issue}) => {

 const [isDescriptionFocused, setisDescriptionFocused] = useState(false);
 const [isTitleFouce, setisTitleFouce] = useState(false);
 const {currentProject} = useContext(ProjectContext);


 const typeDescription = () =>{
        setisDescriptionFocused(true)
       console.log("Type Description")
 } 

 const closeIssueModel = () =>{
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

 const updateIssue = () =>{

 }


  useEffect(() => {
  }, [issue]);

  return (
    <dialog id="issue-model" className='rounded p-8 w-50w'>
      <span className='font-bold first-letter text-2xl  '> {currentProject.name} / Issues </span>
      <hr className='mt-2'></hr>
      <div className='flex justify-between items-center mt-4 '>

          <div className=' relative '>
          <input  value={issue.name}  onFocus={() =>  focuseField(true)}  className='font-medium capitalize text-gray-900 hover:bg-darkGray p-2 rounded hover:ease-in ease-out duration-300 ' /> 
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
            

          </div>
            <select>
              <option> To Do </option>
              <option> In Progress </option>
              <option> Done </option>
            </select>
   
        
    
      </div>

      <div className='mt-8'>
          <textarea className='mt-2 p-4 w-4/5 ' row="20" col="20"  onFocus={() =>  focuseField(false)}  placeholder='Add a description'></textarea>
          { isDescriptionFocused ?  
              <div className='flex gap-3'>  
                 <button type="button" className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                 <button type="button" onClick={()=>removeFouce(false)} className="flex justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
              </div>
           : null  }
      </div>
      
      
      <div className='flex mt-4'>
        <button type="button" onClick={updateIssue}  className="flex justify-center rounded-md w-2/12  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        <button type="button" onClick={closeIssueModel} className="flex w-2/12 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cancel</button>
      </div>
      
    </dialog>
  )
}

export default IssueModel
