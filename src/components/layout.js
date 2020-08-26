import React from 'react'

import NavLinks from './navLinks'
import Footer from './footer'
// import '../style/index2.scss'
import layoutStyles from './layout.module.scss'

const Layout = ( { children }) => {
    return (
        <div className={layoutStyles.container} >
                <NavLinks />
                <div className={layoutStyles.content}>
                    {children}
                </div>
                <Footer />
        </div>
    )
}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 