import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;

}

const UsersPage  = async () => {
  //fake api endpoint to fetch that return a promise using await/callback
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const users: User[] = await res.json();


  return (
    <>
      <h1>Users</h1>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}<li>{user.email}</li></li>)}
        </ul>
    </>
  )
}

export default UsersPage
