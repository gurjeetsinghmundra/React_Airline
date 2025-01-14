import React from 'react'
import styles from './HeroSection.module.css';
import logo from '../assests/header.png'


function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.headline}>Elevate Your Travel Journey</p>
        <h1 className={styles.subheadline}>Experience The Magic Of Flight!</h1>
        <button className={styles.button}>Book A Trip Now</button>
         <div class={styles.header__image}>
          <img src={logo} alt="header" />
        </div>  
      </div>
    </div>
  )
}

export default HeroSection
