import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import planetsData from '../constants/planetsData'
import '../css/LocationDetails'

function LocationDetails(props) {
  const { match: { params: { location_id } }, drivers, ratings } = props

  const location = planetsData.find((location) => {
    return (
      parseInt(location_id) === location.id
    )
  })

  const driver = drivers.map((driver) => {

    if (ratings) {
      const randomizer = Math.floor(Math.random() * ratings.length)
      return (
        <div key={driver.id} className='driver-image one-edge-shadow'>
          <>
            <h2 className='location-details-title'>{driver.name}</h2>
            <img src={driver.image} className='drivers-detail-image' alt='driver' />
            <img src={ratings[randomizer]} className='ratings' alt='star ratings' />
            <Link to={`/locations/${parseInt(location.id)}/drivers/DriversDetailPerLocation/${driver.id}`} className='center'>
              <button className='driver-selector-button'>Select {driver.name}</button>
            </Link>
          </>
        </div>
      )
    }

  })

  return (
    <>
      <div className='location-details-container'>
        <div className='location-details-location-image-container'>
          {location !== undefined ?
            (
              <>
                <h1 className='location-details-location-title'>You Have Chosen To Travel To: {location.name}</h1>
                <img src={location.url} alt={location.name} className='location-details-image ' />
              </>
            )
            : (<h1>Not a location</h1>)
          }
        </div>
        <div>
          <h2>These are the drivers near you: </h2>
          <div className='locations-detail-image-container'>
            {driver}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LocationDetails