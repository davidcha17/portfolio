import React from 'react';

import LinkedInMark from "../images/logo/linkedin-icon-2.svg"
import GitHubMark from "../images/logo/github-1.svg"
import MediumMark from "../images/logo/monogram-medium.svg"
import DevToMark from '../images/logo/devto.svg'

import styles from '../components/contactList.module.scss'


const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/david-taehyun-cha/" target="_blank" rel="noreferrer">
      <img className={styles.brandImg} src={LinkedInMark} alt="LinkedIn Logo"  />
    </a>
  )
}
const GitHubLink = () => {
  return (
    <a href="davidcha17@github.com" target="_blank" rel="noreferrer">
      <img className={styles.brandImg} src={GitHubMark} alt="GitHub Logo"  />
    </a>
  )
}
const MediumLink = () => {
  return (
    <a href="https://medium.com/@littlesadtea" target="_blank" rel="noreferrer">
      <img className={styles.brandImg} src={MediumMark} alt="Medium Logo"  />
    </a>
  )
}
const DevToLink = () => {
  return (
    <a href="https://dev.to/davidcha17" target="_blank" rel="noreferrer">
      <img className={styles.brandImg} src={DevToMark} alt="Dev.to Logo"  />
    </a>
  )
}
// image links for social media, organized components to make JSX more readable 


export default function ContactList() {
  return (

    <ul className={styles.brandList}>

      <li>{DevToLink()}</li>
      <li>{GitHubLink()}</li>
      <li>{LinkedInLink()}</li>
      <li>{MediumLink()}</li>

    </ul>

  )
}