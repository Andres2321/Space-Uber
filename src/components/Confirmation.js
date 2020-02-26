import React from 'react'

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>THANK YOU FOR YOUR PURCHASE</h1>
        <h3>Your driver has been notified and is on the way</h3>
        <p>Location: </p>
        <p>Driver: </p>
        <p>Estimated Schmeckle: </p>
        <p></p>
    </div>
    )
  }
}

export default Confirmation