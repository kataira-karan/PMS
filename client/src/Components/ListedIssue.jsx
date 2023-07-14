import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";



const ListedIssue = ({issue}) => {

    const openModelToEditAnIssue = (issue) =>{
        console.log(issue)
        setcurrentIssue(issue)
        document.getElementById("issue-model").showModal()
    }  
    const deleteIssue = (e, issue) => {

        // e.preventDefault();
        setcurrentIssue(issue)
        console.log("deleting Issue")
        document.getElementById("delete-issue").showModal();

    }
    
  return (
    <div className='relative flex  justify-between items-center bg-white group w-full text-sm py-4  px-4 my-2 rounded-lg hover:cursor-pointer '>
    <div  draggable  onClick={() => openModelToEditAnIssue(issue)} onDragStart={(e)=> dragStarted(e,issue) }>
         <span> {issue.name}</span>
    </div>
    <div className='flex gap-2 items-center text-lg opacity-0  group-hover:opacity-100 transition ease-in-out pr-4 '>
    <span className={`text-sm py-0.5 px-1 rounded ${issue.status === "To Do" ? "bg-darkGray": issue.status === "In progress" ? "bg-blue-200" : "bg-green-200"}`}> {issue.status} </span>
    <span >  <RiDeleteBin5Fill></RiDeleteBin5Fill>  </span>
    </div>
    </div>
  )
}

export default ListedIssue
