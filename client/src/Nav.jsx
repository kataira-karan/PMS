import React from 'react'
import { MdCircleNotifications } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from 'gsap';

const Nav = () => {

    const OpenDropdown = (dropDownType) =>{
        gsap.to('#workDropDown' , {display : "none"})
        gsap.to('#projectDropDown' , {display : "none"})
        gsap.to('#teamsDropDown' , {display : "none"})      

        if(document.getElementById(dropDownType).style.display === "block" ){
            gsap.to(`#${dropDownType}` ,  { display : "none" , })
            return
            
        }else{
            console.log("dropdwon")
            gsap.to(`#${dropDownType}` ,  { display : "block" ,delay : 1 , })
        }
    }

    const openModel = () =>{

        document.getElementById("creat-project-model").showModal()


    }

  return (
    <div className='hidden md:block'>
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
                    
                    <ul id="workDropDown" className='hidden p-4 font-medium      absolute min-w-fit  w-full top-12 z-10 bg-darkGray shadow-lg rounded-md'>
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
                    
                    <ul id="projectDropDown" className='hidden p-4 absolute min-w-fit  w-full top-12 z-10 bg-darkGray shadow-lg rounded-md'>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                        <li>Demo</li>
                    </ul>

                   </li>   
                  <li className='relative flex items-center p-2 gap-1 hover:cursor-pointer hover:bg-lightBlue' onClick={() => OpenDropdown("teamsDropDown")}> 
                  <span>
                    Teams
                  </span>   
                   <span className=''> 
                        <IoIosArrowDown></IoIosArrowDown> 
                   </span> 
                    <ul id="teamsDropDown" className='hidden p-4 absolute min-w-fit  w-full top-12 z-10 bg-darkGray shadow-lg rounded-md'>
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
         <ul className='flex items-center'>
            <li> <MdCircleNotifications></MdCircleNotifications>    </li>
            <li> User Profile</li>
            

        </ul>

        </div>

       
    </div>
  )
}

export default Nav
