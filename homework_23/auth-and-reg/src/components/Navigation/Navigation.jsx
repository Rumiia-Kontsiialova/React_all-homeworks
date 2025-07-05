import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav style={{display:'flex', gap:'10px'}}>
      <Link to="/" style={{textDecoration:'none', color:'blue'}}>Главная</Link>
      <Link to="/login" style={{textDecoration:'none', color:'red'}}>Авторизация</Link>
      <Link to="/register" style={{textDecoration:'none', color:'red'}}>Регистрация</Link>
      <Link to="/user"style={{textDecoration:'none', color:'black'}}>Личный Кабинет</Link>
    </nav>
  )}
export default Navigation