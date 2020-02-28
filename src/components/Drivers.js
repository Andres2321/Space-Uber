import React from 'react'
// import '../css/Drivers'

class Drivers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  
  render() {
    const { drivers } = this.props
    const driver = drivers.map((driver) => {
      return (
        <div key={driver.id}>
          <img className='driver-list' src={driver.image} />
          <p>{driver.id}</p>
          <h1>{driver.name}</h1>
          <p>Rating: </p>
          <p>Driver Description: </p>
        </div>
      )
    })

    return (
      <div>
        <h1>Drivers</h1>
        {driver}
      </div>
    )
  }
}


export default Drivers

