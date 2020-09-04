import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
 
const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author,
                    description
                }
            }
        }
    `)

    return (
        <>
            <h6>Created by {data.site.siteMetadata.author} with Gatsby and React, © 2020</h6>
        </>
    )
}

// same concept as navLinks.js file
// this file is a simple note to indicate who made it, how it was made.

export default Footer 