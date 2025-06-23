import React from 'react'

const TaskList = ({tasks}) => {
    if(tasks.length === 0) {
        return <p>Список пуст</p>
    }
  return (
    <ul>
        {tasks.map((item, index) =>
        <li key={index}>{item}</li>)}
    </ul>
  )
}

export default TaskList