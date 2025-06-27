import { SET_USER_INFO } from "./аctions";

const initialState = {
    name: "John Doe",
    status: "online"
}

// Редьюсер: функция, которая принимает старое состояние и action, и возвращает новое состояние
const rootReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                ...action.payload,
            };
            default: 
            return state;       
    }
}

export default rootReducer