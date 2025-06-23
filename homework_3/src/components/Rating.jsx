import React, { useState } from 'react'
import acceptable from '../assets/acceptable.png'
import bad from '../assets/bad.png'
import excellent from '../assets/excellent.png'
import good from '../assets/good.png'
import styles from '../styles/rating.module.css'

const Rating = () => {
  const [ ratingValue, setRatingValue ] = useState(0)

  const ratingList = 
  [
    bad, acceptable, good, excellent
  ]
  return (
        <div className={styles.container}>
        <img src={ratingList[ratingValue]} alt='Rating' />
        <div>
            <button className={styles.button} onClick={() => setRatingValue(0)}>Плохо</button>
            <button className={styles.button} onClick={() => setRatingValue(1)}>Приемлемо</button>
            <button className={styles.button} onClick={() => setRatingValue(2)}>Хорошо</button>
            <button className={styles.button} onClick={() => setRatingValue(3)}>Отлично</button>
        </div>
    </div>
      )
}

export default Rating