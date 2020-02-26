import React from 'react'
import planetsData from '../constants/planetsData'
import { Link } from 'react-router-dom'
import Footer from './Footer'
class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { locations } = this.props
    const location = locations.map((location, index) => {
      return (
        <div className='flex row locations-container' key={index}>
          <div className='planet-image-container'>
            <img src={planetsData[index].url} alt={location.name} />
          </div>

          <div key={location.id} className='location-text'>
            <h1>{location.name}</h1>
            <Link to={`/locations/locationdetails/${location.id}`}>
              <button className='planet-button'>Select</button>
            </Link>
          </div>
        </div>
      )
    })

    return (
      <div className='locations-container'>
        <div className='wrapper'>
          {location}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Locations