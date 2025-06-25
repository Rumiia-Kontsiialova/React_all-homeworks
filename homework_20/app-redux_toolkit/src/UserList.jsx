import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const users = useSelector(
    (state) => state.users.users
    )

  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {users.map((user) => 
            <li key={user.id}>{user.name}</li>
        )}
        </ul>
    </div>
  )
}

export default UserList