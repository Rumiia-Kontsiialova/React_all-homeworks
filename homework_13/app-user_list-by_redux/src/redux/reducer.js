// Редьюсер — это функция, которая управляет состоянием. Она принимает текущее состояние и действие (action)
// и возвращает новое состояние.

const initialState = {
    users: [ "Alice", "Charlie", "David", "John" ],
    filter: ""                                         // строка фильтра для поиска
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FILTER":   //для обработки действия измнения фильтра
        return {
            ...state,  // копируем старое значение
            filter: action.payload   // обновляем поле filter новым значением из action 
        };
        default:
            return state    // если action не подходит — возвращаем текущее состояние без изменений
    }
}

export default reducer

