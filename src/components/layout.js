import React from 'react'

import NavLink from './navLinks'
import Footer from './footer'
import '../style/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container} >
            <div className={layoutStyles.content}>
                <NavLink />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout 