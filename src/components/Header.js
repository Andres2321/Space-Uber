import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='header'>
      <nav className='nav_links'>
        <li>
          <Link
          to=''
          >Home</Link>
        </li>
        <li>
          <Link
          to='/locations'
          >Locations</Link>
        </li>
        <li>
          <Link
          to='/Drivers'
          >Drivers</Link>
        </li>
        <li>
          <Link
          to=''
          >Log In</Link>
        </li>
        <li>
          <Link
          to=''
          >Get Started</Link>
        </li>
        <li>
          <Link
          to=''
          >Help Center</Link>
        </li>
      </nav>

      <main>
      </main>
    </div>

  )
}



export default Header