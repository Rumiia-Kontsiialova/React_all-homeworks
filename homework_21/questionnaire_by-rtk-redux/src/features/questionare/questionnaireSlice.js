import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            id: 1,
            text: "What language is used in react?",
            options: [ "Java", "JavaScript" ],
            correctAnswer: "JavaScript",
        },
        {
            id: 2,
            text: "What is Redux?",
            options: [ "DataBase", "Application state", "Framework"],
            correctAnswer: "Application state"
        },
    ],
    answers: {}, // объкт для сохранения ответов
    result: 0, // результат после отправки
}

// создаем slice(срез)
const questionnaireSlice = createSlice ({
    name: "questionnaire",
    initialState,
    reducers: {
        // для ответа на вопрос
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload
            state.answers[questionId] = answer
        },
        // для подсчета результата
        countResult(state) {
            let correct = 0
            state.questions.forEach(q => {
                if (state.answers[q.id] === q.correctAnswer) {
                    correct ++
                }
            })
            state.result = correct
        },
        // для сброса
        resetQuiz(state) {
            state.answers = {}
            state.result = 0
        }
    }
})

export const { answerQuestion, countResult, resetQuiz } = questionnaireSlice.actions
export default questionnaireSlice.reducer