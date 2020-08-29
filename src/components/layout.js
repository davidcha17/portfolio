import React from 'react'

// import NavLinks from './navLinks'
// import Footer from './footer'
// import layoutStyles from './layout.module.scss'
import layoutStyles2 from './layout2.module.scss'

const Layout = ( { children }) => {
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

        <div className={layoutStyles2.body} >
            <div className={layoutStyles2.mainContent} >
                <h1>
                    Main Container will hold main content
                </h1>
            </div>
            <div className={layoutStyles2.sideBar} >
                <p>Side bar</p> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Content</li>
                    <li>Contact</li>
                </ul>
                <div>
                    Footer
                </div>
            </div>
        </div>
        // this part will contain a responsive sidebar and a hidden button
    )

}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 