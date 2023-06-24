import {React , useContext, useEffect} from 'react'
import { MdCircleNotifications } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from 'gsap';
import ProjectModel from './ProjectModel';
import { UserInfoContext } from './Context/UserContext';
import SideBarOption from './Home/SideBarOption';
import SideBar from './Home/SideBar';
import { IoIosCreate } from "react-icons/io";
import { ProjectContext } from './Context/ProjectContext';
import {getData} from "./Requests/getRequest"
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Nav = () => {
    let history = useHistory()
    const {currentUser} = useContext(UserInfoContext);
    const {currentProject, changeCurrentProject , setcurrentProject} = useContext(ProjectContext)
    const [allProjects, setallProjects] = useState(null);

    // all you have to do is send a req to server when you change the project
    // fetch new project
    // store it somewhere
    // use setCurrentProject context to set the project

    const OpenDropdown = (dropDownType) => {
        gsap.to('#workDropDown' , {display : "none"})
        gsap.to('#projectDropDown' , {display : "none"})
        gsap.to('#teamsDropDown' , {display : "none"})      

        if(document.getElementById(dropDownType).style.display === "block" ){
            gsap.to(`#${dropDownType}` ,  { display : "none" , })
            return
            
        }else{
            gsap.to(`#${dropDownType}` ,  { display : "block" , height : "auto" , duration: 1})
        }
    }

    const getProjects =  () =>{
        const projects =  getData("http://localhost:5000/project/getUserProjects").then((data)=>{
            setallProjects(data.data.projects)
            
    });

    }

    const openModel = () =>{
        document.getElementById("creat-project-model").showModal()
    }

    const openCreatProjectModel = () =>{
        document.getElementById("project-model").showModal()
    }

    const getProjectById = async (project) =>{

        const d = getData(`http://localhost:5000/project/getProject/${project._id}`).then((data)=>{
            console.log(data);
            setcurrentProject(data.data.project)
            localStorage.setItem("currentProject" , JSON.stringify(data.data.project))
            history.push(`/${project.key}/backlog`)
        });
    }

    useEffect(() => {
        getProjects()
    }, []);

  return (

    <>
        {
            currentUser 
            ?
            <div className='hidden md:block'>
        <ProjectModel></ProjectModel>
        <div className='flex justify-between w-screen h-7h border-b-2 px-8'>
        {/* this will contain logo and left side list */}
        <ul className='flex items-center gap-8  '>
            <li className='text-2xl font-bold'>
                 PMS 
            </li>

            <li className='font-bold text-darkGray'>
               <ul className='flex gap-4'>
                  <li className='relative flex items-center p-2 gap-1 hover:cursor-pointer hover:bg-lightBlue' onClick={()=> OpenDropdown("workDropDown")}> 
                  <span>
                    Your Work   
                  </span>   
                   <span className=''> 
                        <IoIosArrowDown></IoIosArrowDown> 
                   </span> 
                    
                    <ul id="workDropDown" className='hidden p-4 font-medium  min-w-320    absolute   w-full top-12 z-10  bg-white  shadow-2xl rounded-md'>
                        <li className='my-2 '>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                    </ul>

                   </li>   
                  <li className='relative flex items-center p-2 gap-1 hover:cursor-pointer hover:bg-lightBlue' onClick={() => OpenDropdown("projectDropDown") }> 
                  <span>
                    Projects
                  </span>   
                   <span className=''> 
                        <IoIosArrowDown></IoIosArrowDown> 
                   </span> 
                    
                    <ul id="projectDropDown" className='hidden h-0 p-4 absolute   min-w-320 top-12 z-10 bg-white  shadow-2xl   rounded-md'>

                        {
                            allProjects? 
                            allProjects.map((project,index)=>{
                                    return <li className='' key={project.key}  onClick={ () =>getProjectById(project)}>  
                                              {project.name} 
                                       </li>    
                                })
                            :
                            null
                        }

                        <hr></hr>

                        <li onClick={openCreatProjectModel}>
                            <SideBarOption text="Create Project" icon={<IoIosCreate></IoIosCreate>}>  </SideBarOption>    
                        </li>
                    </ul>

                   </li>   
                  <li className='relative flex items-center p-2 gap-1 hover:cursor-pointer hover:bg-lightBlue' onClick={() => OpenDropdown("teamsDropDown")}> 
                  <span>
                    Teams
                  </span>   
                   <span className=''> 
                        <IoIosArrowDown></IoIosArrowDown> 
                   </span> 
                    <ul id="teamsDropDown" className='hidden p-4 absolute min-w-320  w-full  top-12 z-10 bg- bg-white  shadow-2xlrounded-md'>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                    </ul>

                   </li>   
                  <li onClick={openModel} className='relative flex items-center p-2 gap-1 hover:cursor-pointer font-normal text-sm text-white bg-darkBlue rounded-md  ' > 
                            Create Project
                   </li>

                      {/*  creating dialog element */}
                    <dialog id='creat-project-model' >
                        Hello Sir This is dialog model
                    </dialog>
                 
                </ul>  
            </li>
        </ul>

         {/* this will contain user profile option and sign out option */}
         <ul className='flex items-center gap-4 font-bold '>
            <li className='text-2xl'> <MdCircleNotifications></MdCircleNotifications>    </li>
            <li> {currentUser.name}</li>
        </ul>

        </div>

       
    </div> : 
    ""
        }
    
    </>
    
    
  )
}

export default Nav
