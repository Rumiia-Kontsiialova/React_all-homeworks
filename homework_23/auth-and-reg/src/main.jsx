import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
)