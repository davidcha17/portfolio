import React from "react"

import Layout from '../components/layout'
import Content from '../components/content'

import YAMS from '../../static/YAMS.png'
import Station from '../../static/Station.png'

const Project = () => {
  return (
    <Layout>
      <Content>
        <h1>YAMS</h1>
        <img src={YAMS} alt="screenshot of YAMS home page" />
        <h3><strong> github: </strong> <a href="https://github.com/davidcha17/YAMS-frontend" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/davidcha17/YAMS-backend" target="_blank" rel="noreferrer">Back-end</a></h3>
        <h4>Has not been hoisted yet</h4>

        <h1>YapStation</h1>
        <img src={Station} alt="screenshot of YapStation's home page" />
        <h3><strong> github: </strong> <a href="https://github.com/jtb6179/YapStation" target="_blank" rel="noreferrer">Front-end</a>/<a href="https://github.com/jtb6179/YapStation-BackEnd" target="_blank" rel="noreferrer">Back-end</a></h3>
        <h4>Has not been hoisted yet</h4>

      </Content>
    </Layout>
  )
}

export default Project