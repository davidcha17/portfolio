import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import NavStyles from './navLink.module.scss'
// import LayoutStyle2 from './layout2.module.scss'

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
        <>
            <nav>
                <ul style={{
                    margin: '0 auto',
                    listStyleType: 'none'
                }}
                >
                    <ol>
                        <Link to="/" style={{ color: '#196B76' }} >{data.site.siteMetadata.author}</Link>
                        <p>Full Stack Developer</p>
                    </ol>
                    <hr style={{ boxShadow: '1px 2.5px 1px grey' }}
                    />
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/contacts" >Contact</Link>
                    </li>
                    <li>
                        <Link to="/resume" >Resume</Link>
                    </li>
                    <li>
                        <Link to="/projects" >Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
// By importing navStyles from the navLink.module.scss we become more organinzed in trying to style the elements
// the header is the home page, and we have a list of other links that will be shown as a nav bar, we use the navStyles to customize the nav bar


export default NavLinks