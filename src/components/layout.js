import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import NavLinks from './navLinks'
import Footer from './footer'
// import layoutStyles from './layout.module.scss'
import layoutStyles2 from './layout2.module.scss'



const Layout = ( { children }) => {

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

    // const [isHidden, setHidden] = useState(false)

    return (
        <div className={layoutStyles2.body} >

            <div className={layoutStyles2.header}>
                <ol>
                    <Link to="/" style={{ fontSize: '30px', color: '#196B76'}} >{data.site.siteMetadata.author}</Link>
                    <p>Full Stack Developer</p>
                </ol>
                    <hr style={{ boxShadow: '1px 2.5px 1px grey' }}/>
            </div>

            <div className={layoutStyles2.sideBar} >
                <NavLinks />
            </div>

            <div className={layoutStyles2.mainContent} >
                    {children}
            </div>

            <div className={layoutStyles2.footer}>
                <Footer />
            </div>
            
        </div>
        // this part will contain a responsive sidebar and a hidden button
        // come back to this later to fix the toggle and media query
    )

}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 
