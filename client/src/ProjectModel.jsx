import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const ProjectModel = () => {

  const [project, setproject] = useState({name : " "  , key : ""});

  const creatProject =async (e) =>{


    e.preventDefault()

    console.log(project)
    console.log(JSON.parse(localStorage.getItem("login")).token)

    try{
      const data = await axios.post("http://localhost:5000/project/createProject", 
      JSON.stringify({name :  project.name , key : project.key , teamMembers : [] , issues : []}),
      {
        headers : { "Content-Type" : "application/json" , 
        authorization : "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFmMjdkNGM1NzE2OGY3YmY1NjU5NyIsImlhdCI6MTY4NzA0NDQ3MywiZXhwIjoxNjg5NjM2NDczfQ.nbX4XvMlGj_a9UI89J_L1eOBCJ5lfymRc4DeKnRzqhI"
       },
      }
    )
      console.log(data)
    if(data.successs){
      console.log(data)
    } 
    }catch(error){

      console.log(error)

    }
  }

  return (
    <dialog className='w-30w rounded-lg p-16 min-w-396'  id='project-model'>
            <span className='text-2xl font-bold'> Creating Project </span>
            <form className="space-y-6 mt-4 " onSubmit={(e)=>creatProject(e)} method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Project Name</label>
              <div className="mt-2">
                <input id="email" value={project.name} onChange={(e) => setproject({ ...project, name: e.target.value })} name="name" type="text"  required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Project Key</label>
              <div className="mt-2">
                <input id="key" value={project.key} onChange={(e) => setproject({ ...project, key: e.target.value })} name="key" type="text" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Project</button>
            </div>
            </form>
    </dialog>
  )
}

export default ProjectModel
