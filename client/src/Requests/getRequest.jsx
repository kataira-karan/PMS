import axios from "axios";


export const getData =async (url) =>{
    
    try{
    const data = await axios.get(url , 
        {
            headers :  {"Content-Type" : "application/json" ,
            authorization : "Bearer " + JSON.parse(localStorage.getItem("token"))
        }})

        return data;
    }catch(error){
        return error
    }
 
}