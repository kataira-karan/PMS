import axios from "axios";


export const postData =async (url , bodyData) =>{
    console.log(url ,bodyData)
    try{
    const data = await axios.post(url , 
        JSON.stringify(bodyData) ,   
        {   
            headers :  {"Content-Type" : "application/json" ,
            authorization : "Bearer " + JSON.parse(localStorage.getItem("token"))
        }})

        return data
    }catch(error){
        return error
    }
 
}