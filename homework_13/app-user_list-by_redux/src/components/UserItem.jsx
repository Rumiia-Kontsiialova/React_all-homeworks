// UserItem отображает имя одного пользователя, полученное через пропсы

import React from 'react'
import styles from '../styles/UserItem.module.css'

const UserItem = ({name}) => {
  return (
    <li className={styles.item}>
        {name}
    </li>
  )
}

export default UserItem