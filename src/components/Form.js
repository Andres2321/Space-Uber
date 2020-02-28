import React from 'react'
import { Howl } from 'howler'
import { Link } from 'react-router-dom'
import Meeseeks from '../audio/Meeseeks.mp3'
import Footer from './Footer'
// import '../css/Form'

class Form extends React.Component {
  
  soundPlay = () => {
    const sound = new Howl({
      src: Meeseeks,
      volume: 1
    })
    sound.play()
  }
  render() {
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
            <textarea type='text' name="notes" placeholder='Notes' rows='6' cols='25' />
          </div>

          <div className='form-submit'>
            <Link to='/FormSubmit' onClick={this.soundPlay}>
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
}

export default Form