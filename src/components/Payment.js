import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Howl } from 'howler'
import ThankYou from '../audio/thank_you.mp3'
// import '../css/Payment'

class Payment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beginningBalance: undefined,
      price: undefined,
      endingBalance: undefined,
      tips: undefined
    }
  }

  componentDidMount = async () => {
    let beginningBalance = this.props.schmeckles
    let price = Math.floor(Math.random() * 6000) + 5000
    let tip = Math.floor(price * .20)
    await this.setState({
      tips: tip,
      price,
      beginningBalance
    })
    this.updateBalance()
  }

  soundPlay = () => {
    const sound = new Howl({
      src: ThankYou,
      volume: 1
    })
    sound.play()
  }

  updateBalance = () => {
    const { beginningBalance, price, tips } = this.state
    let endingBalance = beginningBalance - (price + tips)
    this.setState({
      endingBalance
    })
    this.props.newBalance(endingBalance)
  }


  render() {
    // console.log(this.state.price)
    console.log(this.state.tip)
    // console.log(this.props)
    const { beginningBalance, price, tips, endingBalance } = this.state

    return (
      <>
        <div className='payment-container'>
          <h1 className='payment-title'>Payment</h1>
          <div className='inner-confirmation-container'>
            <div className='payment-calculation-container'>
              <div className='payment-subcontainer1'>
                <p>My Wallet</p>
                <p>Cost:</p>
                <p>Tips:</p>
                <p>Ending Balance:</p>
              </div>
              <div className='payment-subcontainer2'>
                <p>{price}</p>
                <p>{tips}</p>
                <p>{endingBalance}</p>
              </div>
            </div>
            <div className='payment-image-container'>
              <img src='https://i.imgur.com/ydJ9x8J.png?1' alt='Rick drinking' className='payment-image' />
            </div>
          </div>
          <Link to='/confirmation' onClick={this.soundPlay} className='payment-button'>
            <button className='payment-button-style'>Submit Payment</button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }
}

// onClick = {()=> { props.deduce(price) }}

export default Payment