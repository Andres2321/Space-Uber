import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import planetsData from '../constants/planetsData'

function LocationDetails(props) {
  const { match: { params: { location_id } }, drivers } = props

  const location = planetsData.find((location) => {
    return (
      parseInt(location_id) === location.id
    )
  })

  const driver = drivers.map((driver) => {
    return (
      <div key={driver.id} className='driver-image'>
        <>
          <h2 className='location-details-title'>{driver.name}</h2>
          <Link to={`/locations/${parseInt(location.id)}/drivers/DriversDetailPerLocation/${driver.id}`} className='center'>
            <img src={driver.image} className='drivers-detail-image' alt='driver' />
          </Link>
        </>
      </div>
    )
  })

  return (
    <>
    <div>
      {location !== undefined ?
        (
          <>
            <h1>{location.name}</h1>
            <img src={location.url} alt={location.name} className='location-details-image' />
          </>
        )
        :(<h1>Not a location</h1>)
      }
      </div>
      <div>
        <h2>Drivers near you: </h2>
        <div className='locations-detail-image-container'>
          {driver}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default LocationDetails