import {useState, useEffect} from 'react'
import {firebase} from '../firebase'
import {collatedTasksExist} from '../helpers'

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', 'ymd3we58n5xu85tw')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) 
        ? unsubscribe = unsubscribe.where('projectId', '==', selectedProject)
        : selectedProject === 'TODAY' 
        ? unsubscribe = unsubscribe.where('date', '==', moment.format('DD/MM/YYYY'))
        : selectedProject === 'INBOX' 
        ? unsubscribe = unsubscribe.where('date', '==', moment.format(''))
        : unsubscribe

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data()
            }))
            setTasks(
            selectedProject === 'NEXT_7'
            ? newTasks.filter(task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') && task.archived !==true)
            : newTasks.filter(task => task.archived !== true)
        )
        setArchivedTasks(newTasks.filter(task => task.archived == true))
        })

        return () => unsubscribe()

        
    }, [selectedProject])

    return {tasks, archivedTasks}
}

export const useProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase.firestore().collection('projects').where('userId', '==', 'ymd3we58n5xu85tw').orderBy('projectId').get().then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id
            }))
        })

        if(JSON.stringify(allProjects) !== JSON.stringify(allProjects))
        {
            setProjects(allProjects)
        }
    }, [projects])

    return {projects, setProjects}
}