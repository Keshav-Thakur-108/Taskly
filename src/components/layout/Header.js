
import React, { useState } from 'react'
import {FaPizzaSlice} from 'react-icons/fa'
import { AddTask } from '../AddTask'

const Header = ({darkMode, setDarkMode}) => {

    const [shouldShowMain, setshouldShowMain] = useState(false)
    const [showQuickAddTask, setShowQuickAddTask] = useState(false)

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo" >
                   <img src="./images/logo.png" alt="Taskly"/>
                </div>
                 <div className="settings">
                        <ul>
                            <li
                            data-testid="quick-add-task-action" className="settings__add"
                            >
                                <button 
                                    onClick={() => {
                                    setShowQuickAddTask(true)
                                    setshouldShowMain(true)
                                }}
                                onKeyDown={() => {
                                    setShowQuickAddTask(true)
                                    setshouldShowMain(true)
                                }}
                                >
                                    +
                                </button>
                            </li>
                            <li 
                            data-testid="dark-mode-action"
                            className="settings_darkmode"
                            
                            >
                                <button type='button'
                                onClick={() => setDarkMode(!darkMode)}
                                onKeyDown={() => setDarkMode(!darkMode)}
                                >
                                <FaPizzaSlice/>
                                </button>
                                
                            </li>
                        </ul>
                    </div>
            </nav>
            <AddTask
            showAddTaskMain={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    )
}

export default Header
