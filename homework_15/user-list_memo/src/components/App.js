import { useState, useCallback, useMemo } from 'react'
import UserList from './UserList'

function App() {
  const [filter, setFilter] = useState('')

  const userList = [
  { id: 1, name: 'Александр Васильевич' },
  { id: 2, name: 'Василий Сергеевич' },
  { id: 3, name: 'Сергей Александрович' },
  { id: 4, name: 'Александр Сергеевич' },
  { id: 5, name: 'Василий Александрович' },
  { id: 6, name: 'Сергей Васильевич' },
];

  const filterUsers = useCallback(
    (text) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      )
    },
    [userList]
  )
// useCallback сохраняет функцию filterUsers, чтобы она не пересоздавалась при каждом рендере (если userList не изменился).
// Функция фильтрует userList, возвращая пользователей, у которых имя включает введённый текст (без учёта регистра).
  
  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  )
// useMemo запоминает результат фильтрации.
// Пересчёт произойдёт только если изменится filter или filterUsers.
// Это полезно для производительности — особенно при большом количестве пользователей.

  return (
    <div style={{ padding: '20px'}}>
      <h1>Список пользователей:</h1>
      <input
        type="text"
        placeholder='Введите имя...'
        value={filter}
        // Поле ввода (<input>), которое обновляет filter при каждом изменении текста.
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      />
      <UserList users={filteredUsers} />
      {/* Компонент UserList, который получает список отфильтрованных пользователей и отображает их */}
    </div>
  )
}

export default App