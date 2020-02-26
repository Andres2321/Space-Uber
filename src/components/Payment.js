import React from 'react'
import { Link } from 'react-router-dom'

class Payment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Link>
          <button>Go Back</button>
        </Link>
        <Link to='/confirmation'>
          <button>Submit Payment</button>
        </Link>
      </div>
    )
  }
}


export default Payment