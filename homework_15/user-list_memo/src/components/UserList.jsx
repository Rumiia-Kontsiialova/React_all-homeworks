import React from 'react'

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList


// users.map(...) — перебираем массив users.

// Для каждого пользователя создаём <li> (элемент списка).

// key={user.id} — обязательный ключ, чтобы React правильно отслеживал элементы при изменениях.

// {user.name} — выводим имя пользователя.