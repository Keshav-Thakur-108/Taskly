import React, { useState } from 'react'
import { useProjectsValue, useSelectedProjectValue } from '../../context'

const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue)
    const {setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    return (
        projects && 
        projects.map(project => (
            <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className={
                active === project.projectId
                ? 'active_sidebar__project'
                : 'sidebar__project'
            }
            onClick={() => {
                setActive(project.projectId)
                setSelectedProject(project.projectId)
            }}
            onKeyDown={() => {
                setActive(project.projectId)
                setSelectedProject(project.projectId)
            }}
        >
            {JSON.stringify(project)}
        </li>))
    )
    
}

export default Projects
