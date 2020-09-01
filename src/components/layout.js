import React, { useState } from 'react'

import NavLinks from './navLinks'
import Footer from './footer'
// import layoutStyles from './layout.module.scss'
import layoutStyles2 from './layout2.module.scss'



// const clickedButton = () => {
//     console.log("clicked")
//     this.setState({
//         isHidden: true
//     })

// }

const Layout = ( { children }) => {

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

        <div className={layoutStyles2.body} >
            <div className={layoutStyles2.mainContent} >
                <h1>
                    Main Content Holding data
                </h1>
                    {children}
            </div>
                <span className={layoutStyles2.hamburgerBtn} > 
                    { isHidden ? (
                        <span onClick={() => {setHidden(true)}}> &#9776; </span> 
                    ) : (
                        <span onClick={() => {setHidden(false)}}>  &#9776; </span>
                    )}  
                </span>
                <div className={layoutStyles2.sideBar} >
                    <NavLinks />
                    <div>
                        <Footer />
                    </div>
                </div>
        </div>
        // this part will contain a responsive sidebar and a hidden button
    )

}
// this file shows the structure of the component tree, it is imported to every page and the children is the data within the pages. 
// In every other page component, it'll be wrapped by this layout component to make it more attractive and organized 

export default Layout 

{/* <div class="container">
  <h1>Pop In Side Menu in JavaScript</h1>
  <div id="hamburgerBtn">&#9776</div>
  <nav id="sideMenu">
    <div class="nav-brand">
      <p><a href="https://www.jamesqquick.com/">James <strong>Q</strong> Quick</a></p>
      <img src="https://www.jamesqquick.com/static/d187c1eb5585719ae69edb59c8ae4dc2/1e576/headshot-512.png"/>
    </div>
    <ul class="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Courses</li>
    </ul>
    <div class="footer">      <p>james<strong>q</strong>quick</p>
    </div>
  </nav>
  
</div> */}