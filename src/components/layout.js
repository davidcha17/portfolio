import React from 'react'

import NavLinks from './navLinks'
import Footer from './footer'

import layoutStyles from './layout.module.scss'

const Layout = ( { children }) => {
    return (
        <div  className={layoutStyles.mainContainer} >
        {/* change this to main container */}
            <div className={layoutStyles.sideBar} >
                <NavLinks />
            </div>
            {/* sidebar container */}
                <div className={layoutStyles.mainContent} >
                    {children}
                    {/* main content container */}
                    <div className={layoutStyles.footer} >
                        <Footer />
                    </div>
                </div>
        </div>
    )
}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 