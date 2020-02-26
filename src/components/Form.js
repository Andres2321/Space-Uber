import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Form() {
  return (
    <>
      <div className='form-grid-container'>
        <img src='https://i.imgur.com/BYN97Cp.png?3' alt='Mr. Meeseeks' className='form-picture' />
        <img src='https://i.imgur.com/4GNUqGd.png?1' alt='Rick and Morty' className='form-picture2' />
        <h1 className='form-title'>Tell Mr. Meeseeks What's Wrong</h1>
        <div className='first-name'>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className='Last-name'>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className='email'>
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </div >
        <div className='text-area'>
          <textarea type='text' name="notes" placeholder='Notes' rows='5' cols='25' />
        </div>

        <div className='form-submit'>
          <Link to='/FormSubmit'>
            <button type="submit" className='form-button'>
              Submit
            </button>
          </Link>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Form