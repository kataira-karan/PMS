import React, {useEffect ,useState , createContext  } from 'react'
import axios from 'axios';

export const UserInfoContext = createContext();

export function UserProvider({children}){

const [currentUser, setcurrentUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : null  );

const loginUser =async (e , user) => {
  e.preventDefault()
  console.log(user)

  try{
    const resUser = await axios.post("http://localhost:5000/users/login",
    JSON.stringify({email:user.email , password:user.password , role:user.role }) ,   
     {
     headers: { "Content-Type": "application/json" },
     });  
     // if the log in is success store the credentials in local storage
   if(resUser.data.success){
   
    localStorage.setItem("user" , JSON.stringify( resUser.data.user ))
    localStorage.setItem("token" , JSON.stringify(resUser.data.token))
    localStorage.setItem("currentProject" , JSON.stringify(resUser.data.user.projects[0]))
    setcurrentUser(localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : null)
    console.log(currentUser)
    window.location.href = "/" 
   }else{
     seterror("Error")
   }
  }catch(error){
    console.log(error)
    // seterror(error.response.data.message)
  }
} 



  useEffect(() => {
      // console.log(currentUser)
  }, [currentUser]);

  return (

    <UserInfoContext.Provider value={{currentUser , setcurrentUser ,loginUser }  }>
      {children}
    </UserInfoContext.Provider>

  )


}