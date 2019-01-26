import React, { Component } from 'react'
import rapStorage from '../helpers/storage' // by default the localstorage is initialized

const RootContext = React.createContext()
const { Provider,  Consumer } = RootContext

class RootProvider extends Component {
  constructor() {
    super()
    this.state = {
      lol: 0,
      selectedEra: null,
      menuIsActive: false,
      ...rapStorage.getStorage() // Getting the localStorage template and setting it as state
    }    
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

  /**
   * open/close the menu to select Eras and access to hallOfFame
   */
  toggleMenu = () => {
    this.setState(prevState => ({
      menuIsActive: !prevState.menuIsActive
    }))
  }

  render() {

    let providerValue = {
      state: this.state,
      menuIsActive: this.state.menuIsActive,
      addArtist: this.addArtist,
      toggleMenu: this.toggleMenu,
      setState: this.setState.bind( this )
    }

    return ( 
      <Provider value = { providerValue }> 
        { this.props.children } 
      </Provider>
    )
  }
}

export {
  Consumer
}

export default RootProvider