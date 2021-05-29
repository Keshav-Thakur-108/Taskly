import React, {useState} from 'react'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';
import {Projects} from '../Projects';

const Sidebar = () => {

    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox')
    const [showProjects, setShowProjects] = useState(true)

    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li className={active === 'inbox' ? 'active' : undefined} data-testid="inbox" 
                >
                    <div
                    onClick={() => {setActive('inbox'); setSelectedProject('INBOX')}}
                    onKeyDown={() => {setActive('inbox'); setSelectedProject('INBOX')}}
                    role="button"
                    tabIndex={0}
                    >
                    <span><FaInbox/></span>
                    <span>Inbox</span>
                    </div>
                </li>
                <li className={active === 'today' ? 'active' : undefined} data-testid="today"
                
                >
                    <div
                    onClick={() => {setActive('today'); setSelectedProject('TODAY')}}
                    onKeyDown={() => {setActive('today'); setSelectedProject('TODAY')}}
                    role="button"
                    tabIndex={0}
                    >
                    <span><FaRegCalendar/></span>
                    <span>Today</span>
                    </div>
                </li>
                <li className={active === 'next_7' ? 'active' : undefined} data-testid="next_7"
                >
                    <div
                    onClick={() => {setActive('next_7'); setSelectedProject('NEXT_7')}}
                    onKeyDown={() => {setActive('next_7'); setSelectedProject('NEXT_7')}}
                    role="button"
                    tabIndex={0}
                    >
                    <span><FaRegCalendarAlt/></span>
                    <span>Next 7 days</span>
                    </div>
                </li>
            </ul>

        <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

            <ul className="sidebar__projects">
               {showProjects && <Projects/>}
            </ul>
            {showProjects && <AddProject/>}
        </div>
    )
}

export default Sidebar
