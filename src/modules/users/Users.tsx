import React, { useState } from 'react'
import { useUsersStore } from './usersStore'

function Users() {

  const [username, setUsername] = useState('')

  const users = useUsersStore(state => state.users)
  const addUser = useUsersStore(state => state.addUser)

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