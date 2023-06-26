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

    const changeCurrentProject = (project) =>{
        console.log(project)
         localStorage.setItem("currentProject", JSON.stringify(project))
         setcurrentProject(project)

    
        // window.location.href  = `/${project.key}/backlogs`
    }

    return (

        <ProjectContext.Provider value={{currentProject , changeCurrentProject, setcurrentProject}}>
            {children}
        </ProjectContext.Provider>

    )


}