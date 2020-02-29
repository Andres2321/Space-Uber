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
        <div className='flex row locations-container one-edge-shadow' key={index}>
          <div className='planet-image-container'>
            <img src={planetsData[index].url} alt={location.name} className='locations-image' />
          </div>
          <div key={location.id} className='location-text'>
            <h1 className='locations-name'>{location.name}</h1>
            <Link to={`/locations/locationdetails/${location.id}`} className='location-link'>
              <button className='planet-button'>Select</button>
            </Link>
          </div>
        </div>
      )
    })

    const { isLoading } = this.props
    return (
      <>

        {isLoading ?
          (<div>
            <h1>Wait! Things are loading</h1>
            <img src='https://media.giphy.com/media/SvGFA2WF9IP0WjmzvE/giphy.gif' className='loading-gif' />
          </div>)
          :
          (<div className='main-locations-container'>
            {location}
          </div>)
          }
        <Footer />
      </>
    )
  }
}

export default Locations