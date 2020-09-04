import React, { useState } from 'react'

import NavLinks from './navLinks'
import Footer from './footer'
// import layoutStyles from './layout.module.scss'
import layoutStyles2 from './layout2.module.scss'



const Layout = ( { children }) => {

    // const [isHidden, setHidden] = useState(false)

    return (
        <div className={layoutStyles2.body} >
            <div className={layoutStyles2.mainContent} >
                    {children}
            </div>

                <div className={layoutStyles2.sideBar} >
                    <NavLinks />
                    <div>
                        <Footer />
                    </div>
                </div>
        </div>
        // this part will contain a responsive sidebar and a hidden button
        // come back to this later to fix the toggle and media query
    )

}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 
