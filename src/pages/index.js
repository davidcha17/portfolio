import React from "react"
import { withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import HomeStyle from '../style/home.scss'
import ProfilePic from '../images/profile_picture/profile_pic1.jpeg'



const Home = () => {
  return (
    <Layout>
      <Content>
        <div 
          className={HomeStyle.background}
        style={{
          // height: '100vh',
          // width: '100vh',
          // position: 'relative',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'auto',
          backgroundImage: `url(${withPrefix(ProfilePic)})`}}
        >
          <h1 className={HomeStyle.imageText} >I want to create things that'll improve our daily lives.</h1>
        </div>
     </Content>
    </Layout>
  )
}

export default Home