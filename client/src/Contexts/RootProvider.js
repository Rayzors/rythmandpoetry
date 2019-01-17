import React, { Component } from 'react'
import rapStorage from '../helpers/storage' // by default the localstorage is initialized

const RootContext = React.createContext()
const { Provider,  Consumer } = RootContext

class RootProvider extends Component {
  constructor() {
    super()
    this.state = {
      lol: 0,
      ...rapStorage.getStorage() // Getting the localStorage template and setting it as state
    }

    // Props passed as value to the <Provider />
    this.providerValue = {
      state: this.state,
      addArtist: this.addArtist,
      setState: this.setState.bind( this )
    }
  }

  componentDidUpdate() {
    this.providerValue.state = this.state // updating the state passed to the <Provider />
  }

  /**
   * Add an artist in the state of the RootProvider and setting the localstorage
   */
  addArtist = ( artistId ) => {
    const stateUnlockedArtist = this.state.unlockedArtist
    if( !stateUnlockedArtist.includes(artistId) ) {
      // update state
      this.setState( prevState => ({ unlockedArtist: [ ...prevState.unlockedArtist, artistId ] }) )
      // update localStorage
      rapStorage.setItem( 'unlockedArtist', this.state.unlockedArtist )
      console.log('you just unlocked an artist ' + artistId )
    } else { console.log('already unlocked ' + artistId ) }
  }

  render() {
    return ( 
      <Provider value = { this.providerValue }> 
        { this.props.children } 
      </Provider>
    )
  }
}

export {
  Consumer
}

export default RootProvider