import React, { useState } from 'react'
import styles from '../styles/list.module.css'

const List = () => {
    const [ people, setPeople ] = useState([
        { id: 1, name: 'Иван', age: 20 },
        { id: 2, name: 'Мария', age: 22 },
        { id: 3, name: 'Алексей', age: 21 },
        { id: 4, name: 'Марина', age: 19 },
        { id: 5, name: 'Даша', age: 23 },
        { id: 6, name: 'Глеб', age: 24 },
        { id: 7, name: 'Дима', age: 18 },
        { id: 8, name: 'Гриша', age: 20 },
        { id: 9, name: 'Серафим', age: 21 }
    ])

  return (
    <div>
        <h1 className={styles.wrapper}>Список приглашенных:</h1>
        <ul className={styles.list}>
            {people.map((person) => (
                <li key={person.id}>
                    Имя: {person.name}. Возраст: {person.age}лет.
                    <button className={styles.button} onClick={() => setPeople(people.filter(people => people.id !== person.id))}>Удалить</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List