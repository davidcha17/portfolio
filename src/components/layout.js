import React, { useState } from 'react'

import NavLinks from './navLinks'
import Footer from './footer'
// import layoutStyles from './layout.module.scss'
import layoutStyles2 from './layout2.module.scss'



// const clickedButton = () => {
//     console.log("clicked")
//     this.setState({
//         open: true
//     })

// }

const Layout = ( { children }) => {

    const [open, setOpen] = useState(false)
    const button = '&#9776;'
    
    console.log(open)
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
                    Main Content Holding data
                </h1>
                    {children}
            </div>
                <span 
                open={open}
                onClick={ () => { setOpen(!open) }} 
                className={layoutStyles2.hamburgerBtn}
                > 
                    {open ? 'X' : button}
                </span>

                {
                    open ? (
                        <div className={layoutStyles2.sideBar} >
                                <NavLinks />
                                <div>
                                    <Footer />
                                </div>
                        </div> 
                    ) : (
                        <div open className={layoutStyles2.sideBar} >
                                <NavLinks />
                                <div>
                                    <Footer />
                                </div>
                        </div> 
                )}
                {/* <div className={ open === false ? layoutStyles2.sideBar : '&#9776;'} >
                    <NavLinks />
                    <div>
                        <Footer />
                    </div>
                </div> */}
        </div>
        // this part will contain a responsive sidebar and a hidden button
    )

}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 
 
export default Layout 

// return (

    // <Navigation>
      
    //   <Logo />
      
    //   <Toggle
    //     navbarOpen={navbarOpen}
    //     onClick={() => setNavbarOpen(!navbarOpen)}
    //     >
    //             {navbarOpen ? <Hamburger open /> : <Hamburger />}
    //   </Toggle>
    //   {navbarOpen ? (
    //                     <Navbox>
    //                     <NavbarLinks />
    //                     </Navbox>
    //                 ) : (
    //                     <Navbox open>
    //                     <NavbarLinks />
    //                     </Navbox>
    //   )}
    // </Navigation>
//   )
// }