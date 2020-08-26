import React from "react"

import Content from '../components/content'
import Layout from '../components/layout'
import aboutStyles from '../components/about.module.scss'

import ProfilePic from '../images/profile_picture/profile_pic2.jpeg'

const About = () => {
  return (    
    <Layout>
      <Content>
        <h1 className={aboutStyles.title}>Hello World</h1>
        <img className={aboutStyles.picture} src={ProfilePic} alt="profile pic" />
        <div className={aboutStyles.aboutDescription} >

          <h3> My name is David Cha, a full-stack developer and I am from the city of New York</h3>
          
          <p> Before I attended the bootcamp and graduated, I was an Economic graduate from Queens College and a full-time worker as a fish 
          handler. I always had a connection towards technology growing up and enjoyed how it always made my life easier. It made me wondered... 
          what kinds of possibilities I would encounter if I was able to master the craft of technology. My first true first coding experience
          was when I was at Queens College taking a class CS111, we had to create star patterns with for loops and while loops with conditional
          statements. It was as if we were creating art through computers and it's breath taking because it was a clear example of how real life
          can be transitioned into digital life. They're really the same thing.  
          My time at Flatiron School was a breath taking experience because I got to learn so many concepts within a matter of a few 
          months. It also gave me the drive to constantly learn new things and cherish the knowledge I have gained from it. I have learned
          how to create a website by using JavaScript and Ruby...
          </p>
          
        </div>
      </Content>
    </Layout>
  )
}

export default About
