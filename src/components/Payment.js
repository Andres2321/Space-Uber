import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Howl } from 'howler' 
import ThankYou from '../audio/thank_you.mp3'

class Payment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  soundPlay = () => {
    const sound = new Howl({
      src: ThankYou,
      volume: 1
    })
    sound.play()
  }
  
  render() {
    return (
      <>
      <div>
          <Link to='/confirmation' onClick={this.soundPlay}>
            <button >Submit Payment</button>
        </Link>
        </div>
        <Footer />
        </>
    )
  }
}

export default Payment