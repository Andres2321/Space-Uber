import React from 'react'

function LocationDetails(props) {

  const { match: { params: { location_id } }, locations} = props

  const location = locations.find((location) => {
    return (
      parseInt(location_id) === location.id
    )
  })

  return (
    <div>
      <h1>
        Location Detail
      </h1>
      {location !== undefined ?
        (<h1>{location.name}</h1>)
        :
        (<h1>Not a location</h1>)
      }
      <div>
        <h2>Drivers</h2>
      </div>
    </div>
  )
}




export default LocationDetails