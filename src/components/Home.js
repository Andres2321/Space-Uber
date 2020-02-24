import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
  export default Home