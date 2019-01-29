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
      mute: false,
      currentPlaylist: [],
      currentMusic: 'https://artlistmusic.azureedge.net/artlist-mp3/72045_04_-_Runaway_(16-44.1).mp3', // By default it's the ambient music
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

  setAmbientMusic = musicSrc => {
    //Ambiant music
    if(this.state !== musicSrc) {
      this.setState({ currentMusic: musicSrc })
    }
  }

  toggleSound = () => {
    this.setState( prevState => ({ mute: !prevState.mute }) )
  }

  setTrackList = array => this.setState({ currentPlaylist: [...array] })

  render() {

    let providerValue = {
      state: this.state,
      menuIsActive: this.state.menuIsActive,
      addArtist: this.addArtist,
      toggleMenu: this.toggleMenu,
      setState: this.setState.bind( this ),
      setAmbientMusic: this.setAmbientMusic.bind(this)
    }

    return ( 
      <Provider value = { providerValue }> 
        { this.props.children } 
      </Provider>
    )
  }
}

export {
  Consumer,
  RootContext
}

export default RootProvider