import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'  // указываем откуда взять редьюсер

const store = configureStore ({
    reducer: {
        users: userReducer
    }
})

export default store