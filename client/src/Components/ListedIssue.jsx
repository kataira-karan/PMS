  import {React , useState} from 'react'
  import { RiDeleteBin5Fill } from "react-icons/ri";
  import DeleteAlert from './DeleteAlert';
  import { useEffect } from 'react';



  const ListedIssue = ({issue ,setcurrentIssue ,currentIssue}) => {

    const [openDeleteAlert, setopenDeleteAlert] = useState(false);


      const openModelToEditAnIssue = (issue) =>{
          console.log(issue)
          setcurrentIssue(issue)
          setopenDeleteAlert(true)
          document.getElementById("issue-model").showModal()
      }  
      const deleteIssue = (e) => {
          // setcurrentIssue(issue)
          // console.log("deleting Issue")
          // setcurrentIssue(issue)
          // console.log(currentIssue)
          // setopenDeleteAlert(true)
          // document.querySelector('[data-modal]').showModal();

          alert(`Are you sure you want to delete issue ${issue.name}`)
      }

      useEffect(() => {
        console.log(currentIssue)
        console.log(issue)
      }, [currentIssue]); 
      
    return (
      <div className='relative flex  justify-between items-center bg-white group w-full text-sm py-4  px-4 my-2 rounded-lg hover:cursor-pointer '>
        <div  draggable  onDragStart={(e)=> dragStarted(e,issue) }>
            <span> {issue.name}</span>
        </div>
        <div className='flex gap-2 items-center text-lg opacity-0  group-hover:opacity-100 transition ease-in-out pr-4 '>
            <span className={`text-sm py-0.5 px-1 rounded ${issue.status === "To Do" ? "bg-darkGray": issue.status === "In progress" ? "bg-blue-200" : "bg-green-200"}`}> {issue.status} </span>
            <span onClick={(e) => deleteIssue(e)} >  
              <RiDeleteBin5Fill></RiDeleteBin5Fill>  
            </span>
        </div>


        {/* WILL HAVE TO MOVE THIS FUNCTION BUT WILL HAVE TO KEEP IT THIS WAS  */}
        {/* AS I AM NOT ABLE TO PASS DATA IN DIALOG */}

        {/* LET'S JUST MAKE AN ALERT BOX */}
        {/* {
          currentIssue 
          ?
          <dialog data-modal >
          Are you sure you want to delete issue ?
          <span> {currentIssue.name} </span>
        </dialog>
        :null

        }

<dialog data-modal >
          Are you sure you want to delete issue ?
          <span> {currentIssue.name} </span>
        </dialog> */}
        
        
      
      </div>
    )
  }

  export default ListedIssue
