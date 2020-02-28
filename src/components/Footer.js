import React from 'react'
import '../css/Footer'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-container2'>
          <h2>Our Founders</h2>
          <div className='footer-container4'>
            <div className='sub-container3'>
              <img src='https://media.giphy.com/media/2rABGk0WV4wHDvznj1/giphy.gif' className='bit-giphy-rick' alt='bit Rick' />
            </div>
            <div className='sub-container4'>
              <img src='https://media.giphy.com/media/U7Ki2IlyjtUvMCYOQJ/giphy.gif' className='bit-giphy-morty' alt='bit Morty'/>
            </div>
          </div>
        </div>
        <div className='footer-container3'>
          <div className='sub-container1'>
            <h2>About Us</h2>
            <span>Investor Relations</span>
            <span>Newsroom</span>
            <span>Please Donate</span>
            <span>Careers</span>
            <span>Blog</span>
            <span>Technologies</span>
          </div>
          <div className='sub-container2'>
            <h2>Coming Soon</h2>
            <span>Interdimensional Travel</span>
            <span>Merchandise Shop</span>
            <span>Business Travel</span>
            <span>Morty-eats</span>
          </div>
        </div>
      </div>
      <div className='last-footer-element'>
        <h4>
          Created by: Andres Arias with the help of General Assembly
        </h4>
      </div>
    </div>
  )
}



export default Footer