import React from "react"

import Layout from '../components/layout'
import aboutStyles from '../components/about.module.scss'

import ProfilePic from '../images/profile_picture/pic10.jpeg'

const About = () => {
  return (    
    <Layout>
        <h1 className={aboutStyles.title}>Hello World</h1>
        <img className={aboutStyles.picture} src={ProfilePic} alt="profile pic" />
        <div className={aboutStyles.aboutDescription} >

          <h3> My name is David Cha, a full-stack developer and I am from the city of New York</h3>
          
          <p> Before I attended the bootcamp and graduated, I was an Economics graduate from Queens College and a full-time worker at O-toro. 
          I always had a connection towards technology growing up and enjoyed how it always made my life easier. It made me wondered...what 
          kinds of possibilities I would encounter if I was able to master the craft of technology. My first true first coding experience
          was when I was at Queens College taking a CS111 class, we had to create star patterns with for loops and while loops with conditional
          statements. By meticulously following the syntax and logic I was able to create art through computers. Such a breath-taking experience
          where I was able to transition a real-life action into a digital action. This opened up a new perspective that everything around us can 
          be transitioned into code. 
         
          My time at Flatiron School was an exhilarative experience because I got to learn so many concepts within a matter of a few 
          months. With those concepts I was able to build a few projects that I am proud of. And I am looking forward to building more projects 
          that will help improve the quality of life. Of course, there are millions of concepts to learn and this journey is only the beginning.
          The more I code, the more I acquire, the more certain I am that technology grows every day. 
    
          </p>
          
        </div>
    </Layout>
  )
}

export default About
