import React from "react"

import Layout from '../components/layout'
import style from '../components/project.module.scss'

import YAMS from '../../static/YAMS.png'
import Station from '../../static/Station.png'
import Portfolio from '../../static/Portfolio.png'
import Tracker from '../../static/Tracker.png'

const Project = () => {
  return (
    <Layout>
        <h1>Shop Tracker</h1>
        <img className={style.projectImage} src={Tracker} alt="screen shot of Tracker List" />
        <h3 className={style.projectLink} ><strong>github: <a href="https://github.com/davidcha17/Store-Tracker" target="_blank" rel="noreferrer">Shop Tracker</a></strong></h3>
        <p><strong>Hoisted: <a href="https://davidcha17.github.io/Store-Tracker/" target="_blank" rel="noreferrer">https://davidcha17.github.io/Store-Tracker/</a></strong></p>

        <div className={style.description} >

          <p>I wanted to build up on my fundamentals on vanilla Javascript. There's no better way to do that other than actually building a 
          simple shopping to do list. There is no backend, but all the instance data are saved through the local storage from the browser. This is
          a static website, but it does have user interactions! I have definitely built up my fundamentals on vanilla Javascript and I encountered
          a few challenges. One of the few challenges that was the most difficult was rendering the switch case between the bought items and the
          not bought items. When I console.logged the trackerList (DOM-element for ul), I get an empty string even though the trackerList contains
          a bunch of li items. I knew that the error was coming from the index.html file and after a few readings, I found out that the when the 
          element "ul|     |ul" are separated from each other, the element produces an empty string. When I was trying to do a forEach method on the
          trackerList for the child nodes, an empty string would show up and would prevent the anonymous function to change the display of the li with 
          the values of bought, or !bought. Once I deleted the whitespace in between the element "ul||ul", the switch cases started to work. 
          </p>
          <p>I am going to add a few more features into this project, such as a progress bar, a history for the user to have a reference from his/her
          last trip to the store, and making it into a phone responsive app.</p>

        </div>
        <div className={style.tools}>

          <p><strong>Tools:</strong></p>
          <ul>
            <li><strong>Vanilla Javascript</strong></li>
            <li><strong>Custom CSS</strong></li>
          </ul>

        </div>

        <hr className={style.line} />

        <h1>Portfolio Site</h1>
        <img className={style.projectImage} src={Portfolio} alt="screen shot of portfolio" />
        <h3 className={style.projectLink} ><strong>github: <a href="https://github.com/davidcha17/portfolio" target="_blank" rel="noreferrer">Portfolio</a></strong></h3>
        <p><strong>Hoisted: <a href="https://davidcha.netlify.app/" target="_blank" rel="noreferrer">https://davidcha.netlify.app//</a></strong></p>

        <div className={style.description} >

          <p>This project is ongoing. It has given me the opportunity to understand CSS styling and the endless possibilities that
          a developer can achieve. While trying to achieve those possibilities, I usually end up with numerous challenges. Those challenges include
          trying to decipher unexpected "weird behaviors", adding more content, and organizing the structure. This is an ongoing project and 
          I will successfully tackle these challenges. I am going to enjoy this process while building up the application. 
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
          <p>It was the final project I was able to produce during my time at Flatiron and I am proud to state that I was able to build this application. 
          While building this app, I encountered a few challenges such as managing two APIs and managing the delete functionality between the user and an instance object (restaurant)
          from the user's list. I was able to tackle the API challenge by using a tool to help render the data without writing code. From my experience with Postman, it's 
          a great tool to use to help indicate the type of data you would receieve from an API. I was also able to tackle the delete functionality 
          by combining the state of the user and the list instead of deleting the instance object from just the user's list. This was due to the association I had in my backend; 
          a user has many restaurants through a list. I also used active model serializer to associate the models. Due to that, if I change one thing from one model
          I would have to make a similar change in the other model. I really had fun with this project and there is more room for improvement. I will definitely come 
          back to it.</p>

          <p>This project utilized two API sources: <strong>Mapbox and Yelp Fusion.</strong> It hasn't been deployed yet and 
          you are required to acquire your own API keys for both sources. <strong><a href="https://www.yelp.com/developers/v3/manage_app" target="_blank" rel="noreferrer">Sign-up for Fusion Yelp</a></strong> and <strong><a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noreferrer">Sign-up for Mapbox</a></strong> </p>

          <p>Before you become a user, you must input the necessary API keys into a .env file. As a user, you are allowed to input a location from the backend provided by <strong>Ruby on Rails</strong> After inputting 
          the location, you must rails db:seed in order to retrieve any data from the Fusion Yelp's database. You are also allowed to make an account due to <strong>AUTH</strong>. Once all the necessary information is provided 
          the user can now check the surrounding area for available restaurants. You are also able to save a restaurant's information into a list so that they may be able to have a history.</p>

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

