import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import navStyles from './navLink.module.scss'

const NavLinks = () => {

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
    // useStaticQuery is a gatsby package that utilizes graphql, query, and siteMetadata: it helps the application become more dynamic as
    // this project is scaling

    return (
        <navlinks >
            <nav>
                <ul className={navStyles.sideNav}>
                    <ol className={navStyles.topBorder}>
                        <Link to="/" className={navStyles.title} >{data.site.siteMetadata.author}</Link>
                        <p className={navStyles.p} >Full Stack Developer</p>
                    </ol>
                    <hr style={{
                        boxShadow: '1px 2.5px 1px grey'
                    }}
                    />
                    <li>
                        <Link to="/about" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >About</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >Resume</Link>
                    </li>
                    <li>
                        <Link to="/projects" className={navStyles.linkItem} activeClassName={navStyles.activeNavItem} >Projects</Link>
                    </li>
                </ul>
            </nav>
        </navlinks>
    )
}
// By importing navStyles from the navLink.module.scss we become more organinzed in trying to style the elements
// the header is the home page, and we have a list of other links that will be shown as a nav bar, we use the navStyles to customize the nav bar


export default NavLinks