import React from "react"

import Layout from '../components/layout'
import style from '../components/project.module.scss'

import YAMS from '../../static/YAMS.png'
import Station from '../../static/Station.png'
import Portfolio from '../../static/Portfolio.png'

const Project = () => {
  return (
    <Layout>
        <h1>Portfolio Site</h1>
        <img className={style.projectImage} src={Portfolio} alt="scrren shot of portfolio" />
        <h3 className={style.projectLink} ><strong>github: <a href="https://github.com/davidcha17/portfolio" target="_blank" rel="noreferrer">Portfolio</a></strong></h3>
        <p><strong>Hosted: <a href="https://davidcha.netlify.app/" target="_blank" rel="noreferrer">https://davidcha.netlify.app//</a></strong></p>

        <div className={style.description} >

          <p>This project is an ongoing project. It has given me the opportunity to understand CSS styling and the endless possibilities that
          a developer can achieve. While trying to achieve those possibilities, I usually end up with a lot of hardships. Those hardships include
          trying to decipher the weird behaviors occuring, adding more content, and organizing the structure. This is an ongoing project and 
          I will eventually clear these hardships. I am going to enjoy this process while improving the application. 
          This project was provided by <strong><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></strong>, a
          blazing fast modern site generator for React.</p>

        </div>
        <div className={style.tools} >

          <p><strong>Tools:</strong></p>
          <ul>
            <li><strong><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></strong></li>
            <li><strong><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></strong></li>
            <li><strong>Custom CSS</strong></li>
          </ul>

        </div>

        <hr className={style.line} />

        <h1>YAMS</h1>
        <img className={style.projectImage} src={YAMS} alt="screenshot of YAMS home page" />
        <h3 className={style.projectLink} ><strong> github: </strong> <a href="https://github.com/davidcha17/YAMS-frontend" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/davidcha17/YAMS-backend" target="_blank" rel="noreferrer">Back-end</a></h3>
        <h4>Hosted: Has not been hoisted yet</h4>
        <div className={style.description}>

          <p><strong>Y.A.M.S</strong> was created because of uncertain times, this project's primary purpose was to pinpoint 
          available restaurants around a certain location. This would allow the user to interact with his/her area and getting to 
          know where they can get a luscious meal.</p>

          <p>This project utilized two API sources: <strong>Mapbox and Yelp Fusion.</strong> This project hasn't been deployed yet and 
          you are required to acquire your own API keys for both sources. <strong><a href="https://www.yelp.com/developers/v3/manage_app" target="_blank" rel="noreferrer">Sign-up for Fusion Yelp</a></strong> and <strong><a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noreferrer">Sign-up for Mapbox</a></strong> </p>

          <p>Before you become a user, you must input the necessary API keys into a .env file. As a user, you are allowed to input a location from the backend provided by <strong>Ruby on Rails</strong> After inputting 
          the location, you must rails db:seed in order to retrieve any data from the Fusion Yelp's database. You are also allowed to make an account due to <strong>AUTH</strong>. Once all the necessary information is provide 
          the user can now check the surrounding area for available restaurants. You are also able to save a restaurant's information into a list to look back at it for future purposes.</p>

        </div>
        <div className={style.tools} >

          <p><strong>Tools:</strong></p>
          <ul>
            <li><strong><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></strong></li>
            <li><strong><a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Ruby on Rails</a></strong></li>
            <li><strong><a href="https://mapbox.com" target="_blank" rel="noreferrer">Mapbox</a></strong></li>
            <li><strong><a href="https://www.yelp.com/developers/v3/manage_app/" target="_blank" rel="noreferrer">Yelp Fusion</a></strong></li>
            <li><strong>Custom CSS</strong></li>
          </ul>

        </div>

        <hr className={style.line} />

        <h1>YapStation</h1>
        <img className={style.projectImage} src={Station} alt="screenshot of YapStation's home page" />
        <h3 className={style.projectLink} ><strong> github: </strong> <a href="https://github.com/jtb6179/YapStation" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/jtb6179/YapStation-BackEnd" target="_blank" rel="noreferrer">Back-end</a></h3>
        <h4>Hosted: Has not been hoisted yet</h4>
        <div className={style.description}>

          <p><strong>YapStation</strong> is a paried project I developed with <a href="https://github.com/jtb6179" target="_blank" rel="noreferrer">Joel Bly</a> that has a similar 
          concept to twitter. It uses <strong>chatbox</strong> in order to create a post to voice the user's feelings. The primary purpose for this project
          is to create threads from the user and the user's friends.</p>

          <p>My primary role in this project was to set up an <strong>authentication system</strong> in the front-end and back-end. The goal 
          was to persist all the incoming accounts that were being created and the threads from all the users. I also structured the initial
          CSS styling.</p>

        </div>
        <div className={style.tools} >

          <p><strong>Tools:</strong></p>
          <ul>
            <li><strong><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></strong></li>
            <li><strong><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></strong></li>
            <li><strong><a href="https://rubyonrails.org/" target="_blank" rel="noreferrer">Ruby on Rails</a></strong></li>
            <li><strong>Custom CSS</strong></li>
          </ul>

        </div>

    </Layout>
  )
}

export default Project

