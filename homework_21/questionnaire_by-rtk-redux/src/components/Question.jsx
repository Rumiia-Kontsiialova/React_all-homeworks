import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answerQuestion } from "../features/questionare/questionnaireSlice"

const Question = ({questionId}) => {
    const dispatch = useDispatch()

    // получение вопроса по id из состояния
    const question = useSelector ((state) =>
        state.questionnaire.questions.find(q => q.id === questionId)
    )

    // Получаем текущий выбранный ответ для этого вопроса
  const selectedAnswer = useSelector(state =>
    state.questionnaire.answers[questionId]
  )

  // Обработка выбора ответа
  const handleSelect = (answer) => {
    dispatch(answerQuestion({ questionId, answer }))
  }

  // Если вопрос не найден
  if (!question) return <p>Вопрос не найден</p>

  return (
    <div>
        <h3>{question.text}</h3>
        {question.options.slice(0,2).map(option => (
            <div key={option}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleSelect(option)}
            />
            {option}
          </label>
        </div>
        ))}
    </div>
  )
}

export default Question