import { NavLink, Route, Routes } from "react-router-dom"
import Main from "./components/Main";
import ListArticle from "./components/ListArticle";
import Article from "./components/Article";



function App() {
  return (
    <div className="App">
      <nav style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <NavLink to="/" style={{ textDecoration: "none", color: "black"}}>Main</NavLink>
        <NavLink to="/articles" style={{ textDecoration: "none", color: "black"}}>All articles</NavLink>
      </nav>

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/articles" element={<ListArticle />}/>
          <Route path="/articles/:id" element={<Article />}/>
        </Routes>
      
    </div>
  );
}

export default App;
