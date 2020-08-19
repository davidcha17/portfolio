import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import navStyles from './navLink.module.scss'

const NavLink = () => {

    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title,
                    titleTemplate,
                    author,
                    description,
                    url,
                    image
                }
            }
        }
    `)

    return (
        <navlink className={navStyles.topBorder}>
                    <h1>
                        <Link to="/" className={navStyles.title} >{data.site.siteMetadata.author}</Link>
                    </h1>
            <nav>
                <ul className={navStyles.bar}>
                    <li>
                        <Link to="/about" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >Projects</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >Contact</Link>
                    </li>
                </ul>
            </nav>
        </navlink>
    )
}

export default NavLink