import React from 'react'
import { Link } from 'react-router-dom'

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { locations } = this.props
    console.log(locations)
    const location = locations.map((location) => {
      return (
        <div key={location.id}>
          <Link to={`/locations/locationdetails/${location.id}`}>
            <h1>{location.name}</h1>
          </Link>
        </div>
      )
    })
    return (
      <>
        <form>
          <input type='text' placeholder='' />
        </form>
        <div>
          {location}
        </div>
      </>
    )
  }
}

export default Locations