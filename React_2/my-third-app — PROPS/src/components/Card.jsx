import React from 'react'

const Card = (props) => {
  function isExist (value) {
    if(value===true) {
      return 'да'
    }else{
      return 'нет'
    }
  }
  return (
    <li>
        <h2>{props.title}</h2>
        <p>Цена: {props.price}</p>
        <p>В наличии: {isExist(props.exist)}</p>
    </li>
  )
}

export default Card