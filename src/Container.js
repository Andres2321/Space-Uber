import React from 'react'
import Home from './components/Home'
import { Route } from 'react-router-dom'
import LocationDetails from './components/LocationDetails'
import Locations from './components/Locations'
import axios from 'axios'
import Drivers from './components/Drivers'


const CHARACTER_URL = 'https://rickandmortyapi.com/api/character/?species=human'
const CHARACTER_URL_PAGE2 = 'https://rickandmortyapi.com/api/character/?page=2&species=human'
const CHARACTER_URL_PAGE3 = 'https://rickandmortyapi.com/api/character/?page=3&species=human'
const LOCATION_URL = 'https://rickandmortyapi.com/api/location/[1,9,10,15,19,27,28,29,35,37,40,43,47,48,55,57,75]'


class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      charactersPage2: [],
      charactersPage3: [],
      locations: [],
    }
    this.fetchData = this.fetchData.bind(this)
    this.fetchCharacterData = this.fetchCharacterData.bind(this)
  }


  componentDidMount() {
    this.fetchData()
    this.fetchCharacterData()
  }

  async fetchData() {
    try {
      const response = await axios.get(LOCATION_URL)
      const response_character = await axios.get(CHARACTER_URL)
      // console.log(response.data)
      // console.log(response_character.data.results)
      this.setState({
        locations: response.data,
        characters: response_character.data.results
      })
    } catch (err) {
      console.log(err)
    }
  }

  async fetchCharacterData() {

    try {
      const response = await axios.get(CHARACTER_URL)
      const response_page2 = await axios.get(CHARACTER_URL_PAGE2)
      const response_page3 = await axios.get(CHARACTER_URL_PAGE3)
      console.log('hello')

      // this.setState({
      //   characters: response.data.results,
      //   charactersPage2: response_page2.data.results,
      //   charactersPage3: response_page3.data.results
      // })

      // this.setState({
      //   return {
      //     characters: [reponse.data.results, response_page2.data.results, response_page3.data.results]
      //   }
      // }
      // )

      // this.setState(prevState => {
      //   return {
      //     characters: prevState.characters + response_page3.data.results
      //   }
      // }
      // )

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { locations, characters, charactersPage2, charactersPage3 } = this.state
    // console.log(characters)
    // console.log(charactersPage2)
    // console.log(charactersPage3)
    return (
      <div>
        <Home />
        <>
          <Route
            exact
            path='/locations'
            render={() => <Locations locations={locations} />}
          />
          <Route
            path='/locations/locationdetails/:location_id'
            render={(routerProps) => <LocationDetails
              locations={locations}
              drivers={characters}
              drivers2={charactersPage2}
              drivers3={charactersPage3}
              {...routerProps} />}
          />
          <Route
            path='/drivers'
            render={(routerProps) => <Drivers
              drivers={characters}
              drivers2={charactersPage2}
              drivers3={charactersPage3}
              {...routerProps}
            />}
          />
        </>
      </div>
    )
  }
}



export default Container