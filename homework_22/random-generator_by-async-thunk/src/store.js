import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from './features/quote/quoteSlice'

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
    }
})


// Сконфигурируйте Redux Store с использованием `configureStore` из Redux Toolkit и подключите созданный срез состояния для цитат.