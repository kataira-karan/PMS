import {React , useEffect , useState} from 'react'
import {Link} from "react-router-dom"
import { postData } from '../Requests/postRequest';
import axios from 'axios';


const Register = () => {

    const [user, setuser] = useState({email : "" , password : "" , name :""});

    const registerUser = async (e) =>{
        e.preventDefault();
        console.log(user)
        console.log("Registe User")
            try{
                let registeredUser = await axios.post("http://localhost:5000/users/registeruser" ,
                       JSON.stringify({email:user.email , password:user.password , name:user.name }, ),
                       {
                        headers: { "Content-Type": "application/json" },
                        }
                       )

                console.log(registeredUser)
                if(registeredUser.data){
                    window.location.href=   "http://localhost:5173/login"
                }
        //    let registeredUser = postData("http://localhost:5000/users/registeruser", 
        //         JSON.stringify(user),
        //         {
        //             headers :  { "Content-Type" : "application/json"},
        //         }
        //     )
        }catch(error){
            console.log("Error")
        }
    }

  return (
    <div className=' md:flex md:flex-row md:w-screen  h-screen '>
    <div className="flex min-h-full md:w-1/2 flex-col justify-center px-6 py-12 lg:px-8  ">

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    
        <form className="space-y-6 mt-4 " onSubmit={(e) => registerUser(e)} method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input id="text" value={user.name} onChange={(e) => setuser({ ...user, name: e.target.value })} name="name" type="text" autoComplete="name" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

      {/* <div className='flex gap-8'>
      <div className="flex items-center">
            <input  id="default-radio" type="radio" value="Project Manager" name="role" onChange={(e)=> setuser({...user , role : e.target.value})} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 ">Project Manager</label>
          </div>
          
          <div className="flex items-center">
            <input  id="default-radio-2" type="radio" value="Team Member" name="role" onChange={(e)=> setuser({...user , role : e.target.value})} className
            ="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 ">Team Member</label>
          </div>
      </div> */}

    
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
          </div>


      </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">  Signin </Link>
        </p>
      </div>
    </div>

    <div className='md:h-screen md:w-1/2 '>
      <img className='m-auto h-full object-cover ' src='https://wac-cdn.atlassian.com/dam/jcr:e40a81ed-cc02-472d-a62b-f5b2d21d11ef/tips-and-tricks-wide.png?cdnVersion=1055'></img>
    </div>
  </div>
  )
}

export default Register
