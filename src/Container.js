import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { Route, withRouter, Switch } from 'react-router-dom'
import LocationDetails from './components/LocationDetails'
import DriversPerLocation from './components/DriversPerLocation'
import Locations from './components/Locations'
import axios from 'axios'
import HelpCenter from './components/HelpCenter'
import Confirmation from './components/Confirmation'
import Payments from './components/Payment'
import Form from './components/Form'
import FormSubmit from './components/FormSubmit'
import BecomeADriver from './components/BecomeADriver'
import Images from './Images/Images'
import PageNotFound from './components/PageNotFound'

const LOCATION_URL = 'http://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/[1,9,10,15,27,28,29,35,37,40,43,47,48,55,57,75]'
const CHARACTER_URL = 'http://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/[1,2,3,4,5,7,8,9,10,12,13,14,15,16,17,18,20,21,22,23,25,26,28,29,30,31,32,33,34,35,36,40,41,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,60]'

// const CORS = http://cors-anywhere.herokuapp.com/

class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      locations: [],
      driverId: undefined,
      locationId: undefined,
      randomDrivers: [],
      schmeckles: 1000000,
      ratings: Images,
      isLoading: true
    }

    this.fetchData = this.fetchData.bind(this)
    this.fetchCharacterData = this.fetchCharacterData.bind(this)
  }

  async componentDidMount() {
    await this.fetchData()
    await this.fetchCharacterData()
    this.getDrivers()
  }

  async fetchData() {
    try {
      const response = await axios.get(LOCATION_URL)
      this.setState({
        locations: response.data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  async fetchCharacterData() {
    try {
      const response = await axios.get(CHARACTER_URL)
      this.setState({
        characters: [...response.data],
        isLoading: false

      }
      )
    } catch (err) {
      console.log(err)
    }
  }

  receipt = (driverId, locationId, ratings) => {
    this.setState({
      driverId,
      locationId,
      ratings
    })
    this.props.history.push('/payment')
  }

  getDrivers = () => {
    const randomDrivers = []
    const randomIncrement = Math.floor(Math.random() * 30)
    let i = Math.floor(Math.random() * 10)
    for (i; i < this.state.characters.length; i += randomIncrement) {
      randomDrivers.push(this.state.characters[i])
    }
    this.setState({
      randomDrivers
    })
  }

  newBalance = (schmeckles) => {
    this.setState({
      schmeckles
    })
  }

  render() {
    const { locations, characters, schmeckles, randomDrivers, driverId, locationId, ratings, isLoading } = this.state
    return (
      <>
        <Header
          schmeckles={schmeckles} />
          <>
        <Switch>
            <Route
              exact
              path='/'
              render={() => <Home
                drivers={characters}
              />}
            />

            <Route
              path='/helpCenter'
              component={HelpCenter}
            />

            <Route
              path='/BecomeADriver'
              component={BecomeADriver}
            />

            <Route
              exact
              path='/form'
              component={Form}
            />

            <Route
              path='/formSubmit'
              component={FormSubmit}
            />

            <Route
              exact
              path='/locations'
              render={() => <Locations
                locations={locations}
                isLoading={isLoading}
              /> } />

            <Route
              exact
              path='/payment'
              render={(renderProps) => <Payments
                locations={locations}
                schmeckles={schmeckles}
                newBalance={this.newBalance}
                {...renderProps}
              />}
            />

            <Route
              exact path='/locations/locationdetails/:location_id'
              render={(routerProps) => <LocationDetails
                drivers={randomDrivers}
                ratings={ratings}
                isLoading={isLoading}
                {...routerProps} />}
            />

            <Route
              path='/locations/:locationId/drivers/DriversDetailPerLocation/:driver_id'
              render={(routerProps) => <DriversPerLocation
                drivers={randomDrivers}
                receipt={this.receipt}
                {...routerProps}
              />} />

            <Route
              path='/confirmation'
              render={(routerProps) => (
                <Confirmation
                  drivers={randomDrivers}
                  driver={driverId}
                  locations={locations}
                  locationId={locationId}
                  {...routerProps}
                />)} />

            <Route
              exact
              path='/*'
              component={PageNotFound}
            />
        </Switch>
          </>
      </>
    )
  }
}

export default withRouter(Container)


