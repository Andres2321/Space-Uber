import React from 'react'

function Wallet(props) {
  return (
    <div>
      <h1>Wallet</h1>
      <div>
        <p>Balance: {props.schmeckles}</p>
        <p>Funds will be deducted from you bank account and deposited into your virtual wallet</p>
        <button value='5000'>5 000</button>
        <button value='10000'>10 000</button>
        <button value='15000'>15 000</button>
      </div>
    </div>
  )
}

export default Wallet