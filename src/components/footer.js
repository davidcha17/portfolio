import React from 'react'
import footer from './footer.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
 
const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetaData {
                    author,
                    description
                }
            }
        }
    `)

    return (
        <footer className={footer.p} >
            <p>Created by {data.site.siteMetaData.author} with Gatsby and React, © 2020</p>
        </footer>
    )
}

export default Footer 