import React from 'react'
import { useSelector } from 'react-redux'


const Result = () => {
    const result = useSelector(state => state.questionnaire.result)
    const total = useSelector(state => state.questionnaire.questions.length)

  return (
    <div>
        <h2>Result:</h2>
        <p>Сorrect answers {result} out of {total}</p>
    </div>
  )
}

export default Result