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
      currentTracklist: [],
      currentTracklistItem: null,
      currentMusic: '',
      isFading: false,
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
    this.setState((prevState) => ({
      menuIsActive: !prevState.menuIsActive
    }));
  };

  setAmbientMusic = (musicSrc) => {
    //Ambiant music
    if (this.state.currentMusic !== musicSrc) {
      this.setState({ currentMusic: musicSrc });
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
        this.state.currentTracklist[0] &&
          this.setAmbientMusic(this.state.currentTracklist[0].music_src);
      }
    );
  };

  nextSong = () => {
    const { currentTracklist, currentTracklistItem } = this.state;
    if (currentTracklist[currentTracklistItem + 1]) {
      this.setState((prevState) => ({
        currentMusic: currentTracklist[currentTracklistItem + 1].music_src,
        currentTracklistItem: prevState.currentTracklistItem + 1
      }));
    } else {
      this.setState({ currentTracklistItem: 0 }, () => {
        this.setAmbientMusic(currentTracklist[0].music_src);
      });
    }
  };

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
      nextSong: this.nextSong.bind(this)
    };

    return <Provider value={providerValue}>{this.props.children}</Provider>;
  }
}

export { Consumer, RootContext };

export default RootProvider;
