// UserList подключается к Redux, берёт список пользователей и текущий фильтр. 
// Отображает список пользователей, отфильтрованный по фильтру.

import React from 'react'
import UserItem from './UserItem'
import { connect } from 'react-redux'

const UserList = ({ users, filter }) => {

    // фильтрация пользователей по фильтру (поиск по имени, регистр не важен)
    const filteredUsers = users.filter((user) => 
        user.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <ul>
        {filteredUsers.map(( user, index ) => (
        <UserItem key={index} name={user} />
        ))}
    </ul>
  )
} 

const mapPropsToState = (state) => ({
    users: state.users,
    filter: state.filter
})

export default connect(mapPropsToState)(UserList)