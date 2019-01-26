import React, { Component } from 'react'
import AudioPlayer from './AudioPlayer'
import { Consumer, RootContext } from '../../Contexts/RootProvider';

class AudioPlayerContainer extends Component {

  constructor() {
    super()
    this.$audio = null
    this.tracklist = null
    this.hasChanged = false
    this.state = {
      music_src: null,
      played: false,
      currentTime: 0, 
      duration: 0, 
      percentage: 0,
      volume: 0,
      currentItem: 0
    }
  }
  
  componentDidMount() {
    // getting context state
    this.setState({
      music_src: this.context.state.currentMusic
    })
    this.$audio.addEventListener('canplay', () => {
      window.audio = this.$audio
      this.play() // autoplay
      this.fadeInAudio()
      console.log("autoplay")
      this.updateDuration()
    })
    this.$audio.addEventListener('ended', () => {
      console.log( 'ended' )
    })
    this.$audio.volume = this.state.volume // force when the volume attribute is not working
  }

  componentDidUpdate() {
    if( (this.context.state.currentMusic !== this.state.music_src) ) {
      this.fadeOutAudio()
      clearInterval( this.timer )
      this.setState({ music_src: this.context.state.currentMusic }, () => {
        console.log(' played in cpdu')
        setTimeout(() => {
          this.pause()
          this.$audio.load()
        }, 2500)
      })
    }
  }

  fadeOutAudio = () => {
    let fadePoint = this.$audio.currentTime 
    let fadeAudio = setInterval(() => {
      let volume = Math.round(this.$audio.volume * 100)
      if ((this.$audio.currentTime >= fadePoint) && (volume >= 0.0)) {
        if((this.$audio.volume - 0.1 >= 0) && (this.$audio.volume - 0.1 <= 1)) {
          this.$audio.volume -= 0.1
          this.$audio.volume = this.$audio.volume.toFixed(1)
        }
      }
      console.log('working' + this.$audio.volume)
      // When volume at zero stop all the intervalling
      if (volume === 0.0) {
          clearInterval(fadeAudio)
          this.fadeInAudio()
      }
    }, 200)
  }

  fadeInAudio = () => {
    let fadePoint = this.$audio.currentTime + 2
    let fadeAudio = setInterval(() => {
      if ((this.$audio.currentTime <= fadePoint) && (this.$audio.volume <= 1.0)) {
        if( (this.$audio.volume + 0.1 <= 1.0) ) {
          this.$audio.volume += 0.1
          this.$audio.volume = this.$audio.volume.toFixed(1)
        }
      }
      console.log('working fadeIn ' + this.$audio.volume)
      // When volume at 1 stop all the intervalling
      if (this.$audio.volume === 1) {
          clearInterval(fadeAudio)
      }
    }, 200)
  }

  
  play = () => {
    const playPromise = this.$audio.play() 
    console.log('played in play method 1')
    if( playPromise !== null && !this.state.played) {
      playPromise
        .then( () => {
          // this.$audio.play()
          this.fadeInAudio()
          this.setState({ played: true }, () => {
            this.timer = setInterval( () => {
              let currentTime = this.$audio.currentTime
              let duration = this.$audio.duration
              let percentage = (currentTime / duration) * 100
              this.updateTime( currentTime )
              this.setState({ percentage })
            }, 100)
          })
        })
        .catch( e => {
          this.pause()
        } )
    }
  }

  pause = () => {
    console.log('pause')
    this.setState({ played: false }, () => {
      this.$audio.pause()
      if( this.timer != null ) {
        clearInterval( this.timer )
      }
    })
  }

  togglePlay = () => {
    if(!this.state.played) {
      this.play()
      return
    }
    this.pause()
  }

  onVolumeChange = e => {
    this.setState({ volume: e.target.value }, () => {
      this.$audio.volume = this.state.volume
    })
  }

  convertTime = time => {
    let minutes = Math.floor( time / 60 )
    let seconds = Math.floor( time - (minutes * 60) )
    if ( seconds <= 9 ) seconds = '0' + seconds
    time = minutes + ':' + seconds;
    return time
  }

  updateTime = time => {
    time = Math.floor( time )
    this.setState({ currentTime: this.convertTime(time) })
  }

  updateDuration = () => {
    console.log(this.convertTime( this.$audio.duration ))
    this.setState({ duration: this.convertTime( this.$audio.duration ) })
  }

  getAudioHTMLElement = el => {
    this.$audio = el 
  }

  render() {
    return (
    <AudioPlayer 
      togglePlay = { () => this.togglePlay() }
      getAudioHTMLElement = { el => this.getAudioHTMLElement(el) }
      onVolumeChange = { evt => this.onVolumeChange(evt) }

      music_src = { this.state.music_src }
      volume = { this.state.volume }
      played = { this.state.played }
      currentTime = { this.state.currentTime }
      duration = { this.state.duration }
      percentage = { this.state.percentage }
    />

  )
  }
}
AudioPlayerContainer.contextType = RootContext // To access the context in Lifecycle methods
export default AudioPlayerContainer