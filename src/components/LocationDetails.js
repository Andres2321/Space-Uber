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
      <div key={driver.id}>
        <Link to={`/locations/${parseInt(location.id)}/drivers/DriversDetailPerLocation/${driver.id}`}>
          <img src={driver.image} className='driver-list' alt='driver' />
        </Link>
        <h2>{driver.name}</h2>
      </div>
    )
  })

  return (
    <div>
      {location !== undefined ?
        (
          <>
            <img src={location.url} alt={location.name} className='location-details-image' />
            <h1>{location.name}</h1>
          </>
        )
        :
        (<h1>Not a location</h1>)
      }
      <h1>
        Location Detail
      </h1>
      <div>
        <h2>Choose your driver:</h2>
        {driver}
      </div>
      <Footer />
    </div>
  )
}




export default LocationDetails