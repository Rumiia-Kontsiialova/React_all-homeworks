import { createSlice } from "@reduxjs/toolkit";

// инициализируем начальное состояние
const initialState = {
    users: [
        {name: "Alice"},
        {name: "Bob"},
        {name: "Charlie"}
    ]
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducer: {
        addUser: ( state, action ) => {
            state.users.push(action.payload)
        },
        deleteUser: ( state, action ) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})


export const { addUser, deleteUser } = userSlice.actions // экспорт экшн
export default userSlice.reducer // экспорт редьюс