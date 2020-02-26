import React from 'react'
import { Link } from 'react-router-dom'



function Header(props) {
  console.log(props)
  return (
    <nav className='nav_links'>
        <img
          src='https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif'
          className='portal'
        />

      <h1 className='logo'>
        <Link to='/'>
          <p>Space Uber</p>
      </Link>
      </h1>

      <Link>
        My Wallet: 0.00 Schmeckles
      </Link>

      <Link
        to='/locations'
      >Locations</Link>

      <Link
        to='/HelpCenter'
      >Help Center</Link>
    </nav>
  )
}

export default Header