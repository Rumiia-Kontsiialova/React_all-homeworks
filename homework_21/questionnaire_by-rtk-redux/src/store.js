import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./features/questionare/questionnaireSlice"

const store = configureStore ({
    reducer: {
        questionnaire: questionnaireReducer,
    }
})

export default store