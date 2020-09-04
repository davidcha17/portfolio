import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NavLinks from './navLinks'
import Footer from './footer'
import LayoutStyles from './layout.module.scss'
// import LayoutStyles2 from './layout2.module.scss'

const Layout = ( { children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author,
                description
            }
        }
    }
`)
    const [isHidden, setHidden] = useState(false)

    return (
        // <div  className={layoutStyles.mainContainer} >
        // {/* change this to main container */}
        //     <div className={layoutStyles.sideBar} >
        //         <NavLinks />
        //     </div>
        //     {/* sidebar container */}
        //         <div className={layoutStyles.mainContent} >
        //             {children}
        //             {/* main content container */}
        //         </div>
        //             <div className={layoutStyles.footer} >
        //                 <Footer />
        //             </div>
        // </div>
        // this is the previous layout with flexbox

        <div className={LayoutStyles.body} >
                  
                  
            <div className={LayoutStyles.sidebar} >
                <NavLinks />
            </div>

            <div className={LayoutStyles.main} >
                    {children}
            </div>
        
            <div className={LayoutStyles.footer} >
                <h6>Created by {data.site.siteMetadata.author} with Gatsby and React, © 2020</h6>
                {/* brought the footer component into layout to test grid layout */}
            </div>
            
        </div>
)}

export default Layout