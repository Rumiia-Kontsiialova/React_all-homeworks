import { useDispatch, useSelector } from "react-redux"
import Question from "./components/Question"
import Result from "./components/Result"
import { useState } from "react"
import { countResult } from "./features/questionare/questionnaireSlice"

function App() {
  const dispatch = useDispatch()

  //получаем вопросы из состояния
  const questions = useSelector(state => state.questionnaire.questions)

  //состояние для понимания отправлены ли ответы
  const [ submitted, setSubmitted ] = useState(false)

  // Кнопка отправки - подсчитать результат
  const handleSubmit = () => {
    dispatch(countResult())
    setSubmitted(true)
  }

  // // Кнопка сброса - начать заново
  // const handleReset = () => {
  //   dispatch(resetQuiz())
  //   setSubmitted(false)
  // }

  return (
      <div>
        <h1 style={{textAlign:"center"}}>Questionnaire</h1>
        
        {questions.map(q => (
          <Question key={q.id} questionId={q.id}/>
        ))}
        
        {!submitted ? (
          <button onClick={handleSubmit} type="submit" style={{background:'blue', color:'white',padding:'5px', margin:'10px', border:'none'}}>submit</button>
        ) : (
           <Result />
        )}
        
       
      </div>
  )
}

export default App
