import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header'

function Header(props) {

  return (
    <nav className='nav_links'>
      <img
        src='https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif'
        className='portal'
        alt='portal'
      />

      <h1 className='logo'>
        <Link to='/'>
          <h5>Go Schwifty</h5>
        </Link>
      </h1>

      <Link to='/wallet'>
        <p>Wallet: {props.schmeckles} Schmeckles</p>
      </Link>

      <Link to='/BecomeADriver'>
    <p>Become a Driver</p>
      </Link>

      <Link
        to='/HelpCenter'>
        <p>Help Center</p>
        </Link>
    </nav>
  )
}

export default Header