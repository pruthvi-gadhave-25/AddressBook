import React from 'react'
import "./Header.css"
import { useAuth } from '../store/auth'

const  Header= () => {

    const user = useAuth() ;
  return (
    <div className='container-fluid  header p-4'>
        <h1>Address Book</h1>
    </div>
  )
}

export default Header