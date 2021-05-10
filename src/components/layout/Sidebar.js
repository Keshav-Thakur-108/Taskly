import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li className="inbox" data-testid="inbox">Inbox</li>
                <li className="today" data-testid="today">Today</li>
                <li className="next_7" data-testid="next_7">Upcoming</li>
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
