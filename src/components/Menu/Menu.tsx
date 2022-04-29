import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>
        <Link to={'/'}>Main menu</Link>
        <Link to={'/job'}>Job</Link>
        <Link to={'/bank'}>Bank</Link>
    </div>
  )
}

export default Menu