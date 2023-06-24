import React, {useEffect ,useState , createContext  } from 'react'
import axios from 'axios';
import { getData } from '../Requests/getRequest';
import { useHistory } from "react-router-dom";

export const ProjectContext = createContext();

export function ProjectProvider({children}){

    let history = useHistory();
    const [currentProject, setcurrentProject] = useState(localStorage.getItem("currentProject") ? JSON.parse(localStorage.getItem("currentProject")) : null);
    useEffect(() => {
    }, []);

    const changeCurrentProject =async (project) =>{
        console.log(project)
        setcurrentProject(project)
        const pro = await getData(`http://localhost:5000/project/getProject/${project._id}`).then((data)=>{
            setcurrentProject(data.data.project)
            console.log(data.data.project);
        }).then(()=>{
            console.log("LOL")
            history.push(`/${project.key}/backlogs`);
            })
        
    
        // window.location.href  = `/${project.key}/backlogs`
    }

    return (

        <ProjectContext.Provider value={{currentProject , changeCurrentProject, setcurrentProject}}>
            {children}
        </ProjectContext.Provider>

    )


}