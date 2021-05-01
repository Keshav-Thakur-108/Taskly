
import React from 'react'

const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo" alt="Taskly">
                    <div className="settings">
                        <ul>
                            <li>+</li>
                            <li>Pizza Slice!</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
