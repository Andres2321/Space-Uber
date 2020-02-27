import React from 'react'
import {Link} from 'react-router-dom'

import Footer from './Footer'

function Home() {
  return (
    <>
      <div className='grid-container'>
        <h1 className='home-title1'>Getting Started</h1>
        <p className='home-par1'>If you have ever wondered about traveling to other planets, then say no more.
        this is the service for you. Just click on the get started button below.</p>
        <img src='https://i.imgur.com/e3HXl3x.png?1' className='home-img1' alt='Rick and Morty'/>
        <Link to='/locations' className='home-button'>
          <button className='home-button-style'>Find Planets</button>
        </Link>
        <h1 className='home-title2'>Where Can I Travel?</h1>
        <p className='home-par2'>currently only offer travel to 16 planets.
          If you know the right guy you might be able to do some interdimensional traveling,
          at the right price, of course. lets just say its not exactly legal yet</p>
        <img src='https://i.imgur.com/smIlUUg.png?1' className='home-img2' alt='teleport gun'/>
        <h1 className='home-title3'>Become a Driver</h1>
        <p className='home-par3'>Get certified to become a driver. Anyone is welcome to join our professional driving team.
        Click on 'Become A Driver' above and get started. What are you waiting for? GO!</p>
        <img src='https://i.imgur.com/1YmnyFC.png?1' className='home-img3'alt='spaceship'/>
        <h1 className='home-title4'>Got More Question?</h1>
        <p className='home-par4'>I don't know pal, it is pretty self explanatory, what else can i say. If you want more sweet sweet content,
        click on the 'Help Center' link above to find out more and access important resources</p>
        <img src='https://i.imgur.com/zVKGJlm.png?1' className='home-img4'alt='Rick'/>
      </div>
      <Footer />
    </>
  )
}


export default Home