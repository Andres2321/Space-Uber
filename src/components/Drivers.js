import React from 'react'

class Drivers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  
  render() {
    const { drivers, drivers2, drivers3 } = this.props

    const driver = drivers.map((driver) => {
      return (
        <div key={driver.id}>
          <img src={driver.image} className='driver-list' />
          <p>{driver.id}</p>
          <h1>{driver.name}</h1>
          <p>{driver.species}</p>
          <p>Rating: </p>
          <p>Driver Description: </p>
        </div>
      )
    })
    const driverPage2 = drivers2.map((driver) => {
      return (
        <div key={driver.id}>
          <img src={driver.image} className='driver-list' />
          <p>{driver.id}</p>
          <h1>{driver.name}</h1>
          <p>{driver.species}</p>
          <p>Rating: </p>
          <p>Driver Description: </p>
        </div>
      )
    })
    const driverPage3 = drivers3.map((drivers) => {
      return (
        <div key={drivers.id}>
          <img src={drivers.image} className='driver-list' />
          <p>{drivers.id}</p>
          <h1>{drivers.name}</h1>
          <p>{drivers.species}</p>
          <p>Rating: </p>
          <p>Driver Description: </p>
        </div>
      )
    })
    return (
      <div>
        {/* {driver}
        {driverPage2}
        {driverPage3} */}
        <h1>Drivers</h1>
        {driver}
        {driverPage2}
        {driverPage3}
      </div>
    )
  }
}


export default Drivers