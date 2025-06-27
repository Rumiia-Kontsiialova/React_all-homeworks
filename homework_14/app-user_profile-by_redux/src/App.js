import { Provider } from "react-redux";
import User from "./components/User";
import UserForm from "./components/UserForm";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <h1>User Profile</h1>
      <h3>User Information</h3>
      <User />
      <h3>Edit User Information</h3>
      <UserForm />
    </Provider>
  );
}

export default App;
