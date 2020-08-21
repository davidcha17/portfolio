import React from "react"

import Layout from '../components/layout'
import Content from '../components/content'
import HomeSytle from '../style/home.scss'
import ProfilePic from '../images/profile_picture/profile_pic1.jpeg'



const Home = () => {
  return (
    <Layout>
      <Content>
        <img src={ProfilePic} alt="profile pic" className={HomeSytle.image} />
          <h1 className={HomeSytle.imageText} >I want to create things that'll improve our daily lives.</h1>
      </Content>
    </Layout>
  )
}

export default Home