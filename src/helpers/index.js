import {collatedTasks} from '../constants'

export const collatedTasksExist = selectedProject => (
    collatedTasks.filter(task => task.key === selectedProject)
)