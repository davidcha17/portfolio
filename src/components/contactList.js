import React from 'react';

import LinkedInMark from "../images/logo/linkedin-icon-2.svg"
import GitHubMark from "../images/logo/github-1.svg"
import MediumMark from "../images/logo/monogram-medium.svg"
import DevToMark from '../images/logo/devto.svg'

import styles from '../components/contactList.module.scss'


const LinkedInLink = () => {
  return (
    <a href="https://www.linkedin.com/in/david-taehyun-cha/" target="_blank" rel="noreferrer">
      <img src={LinkedInMark} alt="LinkedIn Logo" className={styles.brandImg} />
    </a>
  )
}
const GitHubLink = () => {
  return (
    <a href="davidcha17@github.com" target="_blank" rel="noreferrer">
      <img src={GitHubMark} alt="GitHub Logo" className={styles.brandImg} />
    </a>
  )
}
const MediumLink = () => {
  return (
    <a href="https://medium.com/@littlesadtea" target="_blank" rel="noreferrer">
      <img src={MediumMark} alt="Medium Logo" className={styles.brandImg} />
    </a>
  )
}
const DevToLink = () => {
  return (
    <a href="https://dev.to/davidcha17" target="_blank" rel="noreferrer">
      <img src={DevToMark} alt="Dev.to Logo" className={styles.brandImg} />
    </a>
  )
}
// image links for social media, organized components to make JSX more readable 


export default function ContactList() {
  return (

    <ul className={styles.brandList}>

      <li>{LinkedInLink()}</li>
      <li>{GitHubLink()}</li>
      <li>{MediumLink()}</li>
      <li>{DevToLink()}</li>

    </ul>

  )
}