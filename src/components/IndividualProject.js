import React, {useState} from 'react'
import {useSelectedProjectValue, useProjectsValue} from '../context'
import {FaTrashAlt} from 'react-icons/fa'
import {firebase} from '../firebase'

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const {projects, setProjects} = useProjectsValue();
    const {setSelectedProject} = useSelectedProjectValue();

    const deleteProject = (docId) => {
        firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(() => {
            setProjects([...projects]);
            setSelectedProject('INBOX');
        })
    }

    return (
        <>
        <span className='sidebar__dot'>•</span>
        <span className="sidebar__project-name">{project.name}</span>
        <span
        aria-label="Confirm deletion of project"
        className="sidebar__project-delete"
        data-testid = "delete-project"
        onClick={() => setShowConfirm(!showConfirm)}>
            <FaTrashAlt/>
            {showConfirm && (
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p>Are you sure you want to delete the project?</p>
                        <button type="button" onClick={() => deleteProject(project.docId)}>
                            Delete
                        </button>
                         <span 
                         aria-label="Cancel adding project, do not delete"
                         onClick={() => setShowConfirm(!showConfirm)}
                         onKeyDown={() => setShowConfirm(!showConfirm)}
                         role="button"
                         tabIndex={0}
                         >Cancel</span>
                    </div>
                </div>
            )}
        </span>
        </>
    )
}