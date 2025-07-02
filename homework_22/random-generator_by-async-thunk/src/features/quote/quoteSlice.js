import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// начально состояния
const initialState = {
    text: ' ',
    author: ' ',
    status: 'idle',
    error: 0
}

// Используйте функцию `createAsyncThunk` из Redux Toolkit для создания асинхронного действия (thunk), которое будет отправлять запрос к Quotes REST API для получения случайной цитаты (https://zenquotes.io/api/random).
export const fetchRandomQuote = createAsyncThunk(
    'quote/fetchRandomQuote',  // здесь это имя НЕ формируется автоматически!
    async () => {
        const response = await axios.get('https://zenquotes.io/api/random')
        return response.data    
    }
)

// Создайте срез состояния с помощью `createSlice` из Redux Toolkit, определяя в нем обработчики для асинхронного действия, чтобы обновлять состояние в зависимости от статуса запроса (в процессе загрузки, успешно выполнен, произошла ошибка).
const quoteSlice = createSlice ({
    name: 'quote',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder
            .addCase(fetchRandomQuote.pending, (state) => { // здесь не надо передавать action, pending - это ожидание и другого действия тут не будет
                state.status = 'loading'
            })
            .addCase(fetchRandomQuote.fulfilled, (state, action) => {
                const quote = action.payload[0]
                state.status = 'succeeded'
                state.text = quote.q
                state.author = quote.a
            })
            .addCase(fetchRandomQuote.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default quoteSlice.reducer