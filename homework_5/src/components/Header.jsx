import React from 'react'
import styles from "../styles/Header.module.css"
import logo from "../assets/svg/logoSpotify.svg"

const Header = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logoSportify" />
    </div>
  )
}

export default Header