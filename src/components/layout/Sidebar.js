import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>Inbox</li>
                <li>Today</li>
                <li>Upcoming</li>
            </ul>

            <ul className="sidebar__middle">
                <h2>Projects</h2>
            </ul>

            <ul className="sidebar__projects">
                Project component here
            </ul>
        </div>
    )
}

export default Sidebar
