import React, { Component } from 'react';
import rapStorage from '../helpers/storage'; // by default the localstorage is initialized
import rapApi from '../helpers/api';

const RootContext = React.createContext();
const { Provider, Consumer } = RootContext;

class RootProvider extends Component {
  constructor() {
    super();
    this.state = {
      lol: 0,
      selectedEra: null,
      menuIsActive: false,
      fullScreen: false,
      mute: false,
      filterValue: 24000,
      currentTracklist: [],
      currentTracklistItem: null,
      currentMusic: '', // current music_src for <audio/>
      currentSong: {}, // Object that contains infos 
      isFading: false,
      applyingFilter: false,
      eras: [],
      ...rapStorage.getStorage() // Getting the localStorage template and setting it as state
    };
  }

  async componentDidMount() {
    const apiEras = await rapApi.getEras();
    this.setState({ eras: [...apiEras] });

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        this.setState({ fullScreen: true });
      } else {
        this.setState({ fullScreen: false });
      }
    });
  }

  /**
   * Add an artist in the state of the RootProvider and setting the localstorage
   */
  addArtist = (artistId) => {
    const stateUnlockedArtist = this.state.unlockedArtist;
    if (!stateUnlockedArtist.includes(artistId)) {
      // update state
      this.setState((prevState) => ({
        unlockedArtist: [...prevState.unlockedArtist, artistId]
      }));
      // update localStorage
      rapStorage.setItem('unlockedArtist', this.state.unlockedArtist);
      console.log('you just unlocked an artist ' + artistId);
    } else {
      console.log('already unlocked ' + artistId);
    }
  };

  /**
   * enable/disable fullscreen
   */
  toggleFullscreen = async () => {
    try {
      if (this.state.fullScreen === true) {
        await document.exitFullscreen();
      } else {
        await document.body.requestFullscreen();
      }
    } catch (fullscreenError) {
      alert('il y a eu un problème lors du passage en plein écran.');
    }
  };
  /**
   * open/close the menu to select Eras and access to hallOfFame
   */
  toggleMenu = () => {
    const { applyingFilter } = this.state
    if( applyingFilter ) return
    this.setState((prevState) => ({
      menuIsActive: !prevState.menuIsActive
    }), () => {
      const { menuIsActive } = this.state
      if(menuIsActive) {
        this.setLowPass()
      } else {
        this.removeLowPass()
      }
    } );
  };

  setAmbientMusic = (musicSrc) => {
    //Ambiant music
    if(this.state.currentMusic !== musicSrc) {
      this.setState({ currentMusic: musicSrc }, () => this.setCurrentTitle())
    }
  };

  toggleSound = () => {
    if (this.state.isFading) return;
    this.setState((prevState) => ({ mute: !prevState.mute }));
  };

  setTrackList = (array) => {
    this.setState(
      { currentTracklist: [...array], currentTracklistItem: 0 },
      () => {
        this.state.currentTracklist[0] && this.setAmbientMusic(this.state.currentTracklist[0].music_src) && this.setCurrentTitle()
      }
    );
  };

  setCurrentTitle = () => {
    const { currentTracklist, currentTracklistItem } = this.state
    if( currentTracklist.length > 0 ) {
      this.setState({
        currentSong: currentTracklist[currentTracklistItem]
      })
    }
  }

  nextSong = () => {
    const { currentTracklist, currentTracklistItem } = this.state;
    if (currentTracklist[currentTracklistItem + 1]) {
      this.setState((prevState) => ({
        currentMusic: currentTracklist[currentTracklistItem + 1].music_src,
        currentTracklistItem: prevState.currentTracklistItem + 1
      }), 
      () => {
        this.setState({ currentSong: this.state.currentTracklist[this.state.currentTracklistItem] })
      }
      );
    } else {
      this.setState({ currentTracklistItem: 0 }, () => {
        this.setAmbientMusic(currentTracklist[0].music_src);
        this.setState({ currentSong: this.state.currentTracklist[this.state.currentTracklistItem] })
      });
    }
  };

  /**
   * Change the filter value 24kHz <=> 500hz 
   */
  toggleReadMode = () => {
    if( this.state.filterValue !== 24000 ) {
      this.removeLowPass()
    } else if( this.state.filterValue >= 24000 ){
      this.setLowPass()
    }
  }

  removeLowPass = () => {
    // Increment by 1000 every 100ms
    this.setState({ applyingFilter: true },
      () => {
        let interval = setInterval( () => {
          let newValue = this.state.filterValue + 1000
          if(newValue >= 24000) newValue = 24000
          this.setState(({ filterValue: newValue }), 
            () => newValue >= 24000 && this.setState( { applyingFilter: false }, () =>  clearInterval(interval))
          )
        }, 20)
      }
      )
  }

  setLowPass = () => {
    this.setState(({ filterValue: 3000, applyingFilter: true }),
      () => {
        let interval = setInterval( () => {
          let newValue = this.state.filterValue - 200
          if(newValue <= 500) { 
            newValue = 500
          }
          this.setState(({ filterValue: newValue }), 
            () =>  newValue <= 500 && this.setState( { applyingFilter: false }, () =>  clearInterval(interval))
          )
        }, 35)
      }
    )
  }

  render() {
    let providerValue = {
      state: this.state,
      menuIsActive: this.state.menuIsActive,
      addArtist: this.addArtist,
      toggleMenu: this.toggleMenu,
      toggleFullscreen: this.toggleFullscreen,
      setState: this.setState.bind(this),
      setAmbientMusic: this.setAmbientMusic.bind(this),
      toggleSound: this.toggleSound.bind(this),
      setTrackList: this.setTrackList.bind(this),
      nextSong: this.nextSong.bind(this),
      toggleReadMode: this.toggleReadMode.bind(this),
      setLowPass: this.setLowPass.bind(this),
      removeLowPass: this.removeLowPass.bind(this)
    };

    return <Provider value={providerValue}>{this.props.children}</Provider>;
  }
}

export { Consumer, RootContext };

export default RootProvider;
