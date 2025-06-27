import { createStore } from "redux";
import rootReducer from './reducers'

const store = createStore(rootReducer);  // создание хранилища

export default store