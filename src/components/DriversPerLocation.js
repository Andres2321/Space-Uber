import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function DriversPerLocation(props) {

  const { match: { params: { driver_id } }, drivers } = props

  const driver = drivers.filter((driver) => {
    return (
      parseInt(driver_id) === driver.id
    )
  })

  const character = driver.map((driver) => {
    return (
      <div key={driver.id} className='driver-container one-edge-shadow'>
        <h1 className='chosen-drivers-title'>You want {driver.name} as a driver?</h1>
        <img src={driver.image} alt='profile' className='chosen-driver-image' />
      </div>
    )
  })

  return (
    <>
      <div className='driver-detail-per-location-container'>
        <Link to={`/locations/locationdetails/${props.match.params.locationId}`} className='back-to-driver-button'>
          <button className='back-to-drivers-button'>
            Back to drivers
          </button>
        </Link>
        <button onClick={() => props.receipt(driver[0].id, props.match.params.locationId)} className='choose-driver-button'>
          Select driver
        </button>
      </div>
      {character}
      <Footer />
    </>
  )
}

export default DriversPerLocation