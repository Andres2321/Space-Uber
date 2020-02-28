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
              <p>Balance: {beginningBalance} schmeckles</p>
              <p>Cost: {price}</p>
              <p>Tips: {tips}</p>
              <p>Ending Balance: {endingBalance}</p>
            </div>
            <div className='payment-image-container'>
              <img src='https://i.imgur.com/3Knjnd8.png' alt='Rick drinking' className='payment-image' />
            </div>
          </div>
          <Link to='/confirmation' onClick={this.soundPlay} className='payment-button'>
            <button >Submit Payment</button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }
}

// onClick = {()=> { props.deduce(price) }}

export default Payment