import React from 'react'

const Content = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <img src={props.img} alt="" width='100px' height='150px'/>
    </div>
  )
}

export default Content