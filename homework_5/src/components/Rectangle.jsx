import React from 'react'
import styles from "../styles/Rectangle.module.css"
import LogoApple from "../assets/svg/logoApple.svg"
import LogoGoogle from "../assets/svg/logoGoogle.svg"
import LogoX from "../assets/svg/logoX.svg"

const Rectangle = () => {
  return (
    <div className={styles.rectangle}>
        <a className={styles.logo} href="*"><img src={LogoApple} alt="logoApple" /></a>
        <a className={styles.logo} href="*"><img src={LogoGoogle} alt="logoGoogle" /></a>
        <a className={styles.logo} href="*"><img src={LogoX} alt="logoX" /></a>
    </div>
  )
}

export default Rectangle