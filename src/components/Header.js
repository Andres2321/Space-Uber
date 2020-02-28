import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <nav className='nav_links'>
      <img
        src='https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif'
        className='portal'
        alt='portal'
      />

      {/* This is linked to 404 on purpose */}
      <Link to='/' className='logo'>
          <h5>Go Schwifty</h5>
        </Link>

      <Link to='/wallet'>
        <p className='links-style'>Wallet: {props.schmeckles} Schmeckles</p>
      </Link>

      <Link
        to='/HelpCenter'>
        <p className='links-style'>Help Center</p>
        </Link>
    </nav>
  )
}

export default Header