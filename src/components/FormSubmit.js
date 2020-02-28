import React from 'react'
import Footer from './Footer'
// import '../css/FormSubmit'

function FormSubmit() {
  return (
    <>
      <div className='form-submit-container'>
        <h1 className='form-title'>Your Form Has Been Submitted!</h1>
        <h3 className='form-title2'>We will get back to you eventually</h3>
        <img src='https://i.imgur.com/wwF5KRM.png?1' className='form-image'alt='Rick and Morty'/>
      </div>
      <Footer />
    </>
  )
}


export default FormSubmit 