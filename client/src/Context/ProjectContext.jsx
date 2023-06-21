import React, {useEffect ,useState , createContext  } from 'react'
import axios from 'axios';

export const ProjectContext = createContext();

export function ProjectProvider({children}){

    const [currentProject, setcurrentProject] = useState(localStorage.getItem("currentProject") ? JSON.parse(localStorage.getItem("currentProject")) : null);

    const changeCurrentProject = (project) =>{

        setcurrentProject(project)
        console.log(currentProject)
        localStorage.setItem("currentProject" , JSON.stringify(project))
        window.location.href  = `/${project.key}/backlogs   `
    }

    return (

        <ProjectContext.Provider value={{currentProject , changeCurrentProject}}>
            {children}
        </ProjectContext.Provider>

    )


}