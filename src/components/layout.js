import React from 'react'

import NavLink from './navLinks'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
            <NavLink />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout 