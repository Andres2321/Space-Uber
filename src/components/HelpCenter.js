import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function HelpCenter() {
  return (
    <>
      <div className='grid-container-help-center'>
        <img src='https://i.imgur.com/FJSZh9r.png?1' className='help-center-image1' alt='Morty face' />
        <h1 className='help-center-title1'>All drivers have been verified by us, so you can trust us.</h1>
        <p className='help-center-par1'>Before anyone can start driving, they are required to attend a 5 minute training session.
          They will receive their certification and begin transporting strangers.</p>
        <img src='https://i.imgur.com/lSDK3vy.png?1' alt='Rick and Morty' className='help-center-image2'/>
        <h1 className='help-center-title2'>Security is our top priority, Which is why we have 24/7 customers support.</h1>
        <p className='help-center-par2'>Call our professional team of trained safety agents. They are almost always available sometimes.
        Wait average between 1.5 hrs to 2 hrs</p>
        <img src='https://i.imgur.com/cyEJoNJ.png?1' className='help-center-image3'/>
        <h1 className='help-center-title3'>Wounded beyond repair, We have insurance for that!</h1>
        <p className='help-center-par3'>If anything happens to you during your trip. We can help with that.
        Click the Meeseeks box below and put your request through.</p>
        <img src='https://i.imgur.com/sB7xAMa.png?1' className='help-center-image4'/>
        <h1 className='help-center-title4'>Security? Not a problem!</h1>
        <p className='help-center-par4'>One of the safest companies in 2020. The 5 credit card leaks last year don't count. New year, new company.</p>
        <h1 className='help-center-title5'>Click the Meeseeks box to process a request!</h1>
        <Link to='/form' className='help-center-link'>
        <img
          src='https://vignette.wikia.nocookie.net/rickandmorty/images/f/f7/Mr._Meeseeks_Box.png/revision/latest?cb=20160909153718'
          className='help-center-image'
          alt='Meeseeks box'
        />
        </Link>
      </div>
      <Footer />
    </>
  )
}


export default HelpCenter