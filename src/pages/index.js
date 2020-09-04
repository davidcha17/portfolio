import React from "react"
import { withPrefix } from 'gatsby'

import Layout from '../components/layout'
// import HomeStyle from '../style/home.scss'
// import ProfilePic from '../images/profile_picture/profile_pic1.jpeg'
import ProfilePic2 from '../images/profile_picture/pic11.jpeg'



const Home = () => {
  return (
    <Layout>
        <div 
          // className={HomeStyle.background}
        style={{
          height: '99vh',
          // width: '120vh',
          // backgroundAttachment: 'fixed',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${withPrefix(ProfilePic2)})`}}
        >
          <h1  
          style={{
            textAlign: 'center',
            top: '10%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            textShadow: '3px 3px 3px grey'
          }}
          >
          I want to create material that'll improve daily lives.</h1>
        </div>
    </Layout>
  )
}

export default Home