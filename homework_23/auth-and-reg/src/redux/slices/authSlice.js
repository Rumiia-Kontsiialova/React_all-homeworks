import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem('registeredUser'))  // parse превращает JSON В JS

const initialState ={
    registeredUser: savedUser || null, // сохраненный пользователь или ноль- ничего
    isAuthenticated: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.registeredUser = action.payload
            localStorage.setItem('registeredUser', JSON.stringify(action.payload))
            state.error = null // если есть ошибка - мы ее обнуляем
        },
        login: (state, action) => {
            const email = action.payload.email
            const password = action.payload.password
            //  вариант записи с деструктуризацией: const {email, password} = action.payload таким образом запись сокращена
            if(
                state.registeredUser && 
                state.registeredUser.email === email && 
                state.registeredUser.password === password
            ) {
                state.isAuthenticated = true
                state.error = null
            } else {
                state.isAuthenticated = false
                state.error = 'Не правильный логин или пароль'
            }
        },
        logOut: (state) => {
            state.isAuthenticated = false
            state.error = null
        }
    }
})

export const { logOut, login, register } = authSlice.actions
export default authSlice.reducer