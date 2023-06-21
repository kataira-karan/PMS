import React from 'react'
import { gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const CraeteIssueForm = () => {

    const [isAddIssueFormOpen, setisAddIssueFormOpen] = useState(false);
    const [issue, setissue] = useState({});

    const openCreateIssueForm = () =>{
        setisAddIssueFormOpen(true)
    }

    const addIssueToBacklogs =async (e) =>{

        // let issue = await axios.post("")

    }

    useEffect(() => {
    }, [isAddIssueFormOpen]);

  return (
    <div className=''>

        {
            isAddIssueFormOpen  ?   
            <form id="create-issue-form" className='flex gap-2 '>
            <div className="mt-2 w-11/12">
                    <input id="text"  name="issue" type="text" autoComplete="text" required className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
                <button type="button" onClick={(e)=> addIssueToBacklogs(e)} className="flex w-1/5 justify-center rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Issue</button>
            </form>
            :<div id="add-issue-button" onClick={openCreateIssueForm} className='hover:bg-darkGray hover:cursor-pointer font-medium p-1 rounded-lg '  >
            <span>+</span>
            <span>Create Issue</span>
        </div>
        }

        

      
        
    </div>
  )
}

export default CraeteIssueForm
