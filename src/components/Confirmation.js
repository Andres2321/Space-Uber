import React from 'react'
import Footer from './Footer'

function Confirmation(props) {

  const drivers = props.drivers.find((driver) => {
    return (
      parseInt(driver.id) === parseInt(props.driver)
    )
  })
  
  return (
    <>
      <div className='confirmation-container'>
      <h1 className='confirmation-title'>THANK YOU FOR YOUR PURCHASE</h1>
        {drivers !== undefined &&
          <>
          <h3 className='confirmation-driver-name'>{drivers.name} has been notified and is on the way</h3>
          <img className='confirmation-driver-image' src={drivers.image}  alt='driver mug' />
          </>
        }
      </div>
      <Footer />
    </>
  )
}

export default Confirmation