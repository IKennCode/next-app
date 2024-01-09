import React from 'react'

const UsersPage = () => {
  //fake api endpoint to fetch that return a promise using await/callback
  fetch('https://jsonplaceholder.typicode.com/users')


  return (
    <div className='text-black'>
      UsersPage
    </div>
  )
}

export default UsersPage
