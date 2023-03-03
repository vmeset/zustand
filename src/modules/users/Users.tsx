import React, { useEffect, useState } from 'react'
import { IUser, useUsersStore } from './usersStore'

function Users() {

  const [username, setUsername] = useState('')

  const users = useUsersStore(state => state.users)
  const addUser = useUsersStore(state => state.addUser)
  const fetchUsers = useUsersStore(state => state.fetchUsers)

  useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        addUser(username)
        setUsername('')
      }}>
        <input type="text" value={username} 
          onChange={e => setUsername(e.target.value)}
        />
      </form>
      {users.map(user => (
        <div key={user.id}>
          {user.username}
        </div>
      ))}
    </div>
  )
}

export default Users