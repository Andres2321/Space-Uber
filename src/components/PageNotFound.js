import React from 'react'
import { Howl } from 'howler'
import sun from '../audio/Screaming-sun.mp3'
import Footer from './Footer'

class PageNotFound extends React.Component {
  constructor() {
    super()
    this.state = {
      isloading: true
    }
  }
  componentDidMount() {
    this.soundPlay()
  }

  soundPlay = () => {
    const sound = new Howl({
      src: sun,
      volume: 1
    })
    sound.play()
  }

  render() {
    return (
      <div className='page-not-found-container'>
        <h1 className='pagenotfound-title'>404 Error</h1>
        <h1 className='pagenotfound-title'>
          Look what you did. Stop breaking things!
      </h1>
        <div className='animation'>
          <img src='https://i.imgur.com/ydJ9x8J.png?1' alt='screaming' className='sun-image' />
        </div>
        <Footer />
      </div>
    )
  }
}

export default PageNotFound