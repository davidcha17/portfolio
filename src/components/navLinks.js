import React from 'react'
import { Link } from 'gatsby'


const NavLink = () => {

    return (
        <navlink>
            <nav>
                <ul>
                    <li>
                        <Link to="/">David Cha</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </nav>
        </navlink>
    )
}

export default NavLink