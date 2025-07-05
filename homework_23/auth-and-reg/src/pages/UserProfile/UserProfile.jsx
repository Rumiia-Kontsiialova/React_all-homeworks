import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/authSlice'

const UserProfile = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>User profile</h1>
      <button onClick={() => dispatch( logOut() )}>LogOut</button>
    </div>
  )
}

export default UserProfile