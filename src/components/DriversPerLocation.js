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
      <div key={driver.id}>
        <h1>{driver.name}</h1>
        <img src={driver.image} className='driver-list' alt='profile' />
        <p>{driver.species}</p>
        <p>Rating: </p>
        <p>Driver Description: </p>
      </div>
    )
  })

  // const goBack = () => {
  //   props.history.push(`/locations/locationdetails/${props.match.params.locationId}`)
  // }

  // const location = planetsData.find((location) => {
  //   return (
  //     parseInt(location_id) === location.id
  //   )
  // })

  console.log(driver)
  return (
    <div>
      {character}
      <Link to={`/locations/locationdetails/${props.match.params.locationId}`}>
        <button>
          Back to drivers
      </button>
      </Link>

      <button onClick={() => props.receipt(driver[0].id, props.match.params.locationId)} >
          Select driver
      </button>

      <Footer />
    </div>
  )
}

export default DriversPerLocation