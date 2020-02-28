import React from 'react'
import { Howl } from 'howler'
import sun from '../audio/Screaming-sun.mp3'
import Footer from './Footer'

class PageNotFound extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // this.soundPlay()
  }

  // soundPlay = () => {
  //   const sound = new Howl({
  //     src: sun,
  //     volume: 1
  //   })
  //   this.soundPlay()
  // }

  render() {
    return (
      <div className='page-not-found-container'>
        <h1 className='pagenotfound-title'>404 Error</h1>
        <h1 className='pagenotfound-title'>
          Look what you did!
      </h1>
        <img src='https://i.imgur.com/ydJ9x8J.png?1' alt='dancing' className='sun-image' />
        <Footer />
      </div>
    )
  }

}

export default PageNotFound