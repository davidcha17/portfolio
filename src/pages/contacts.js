import React from "react"

import Layout from '../components/layout'
import ContactList from '../components/contactList'

const Contact = () => {
  return (
    <Layout>
        <h1>Contact Information</h1>
        <h4>Feel free to connect with me on LinkedIn and Github. Also feel free to checkout my blogs on medium and dev:</h4>
        <ContactList /> 
        <h4>If you wish to connect through email: </h4>
        <p><strong>david.cha225@gmail.com</strong></p>
        <a href="mailto:david.cha225@gmail.com">(Click to open mail app directly)</a>
    </Layout>
  )
}

export default Contact