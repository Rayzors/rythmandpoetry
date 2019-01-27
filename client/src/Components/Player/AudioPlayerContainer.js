import React, { Component } from 'react'
import AudioPlayer from './AudioPlayer'
import { RootContext } from '../../Contexts/RootProvider'

class AudioPlayerContainer extends Component {

  constructor() {
    super()
    this.$audio = null
    this.tracklist = null
    this.hasChanged = false
    this.state = {
      music_src: null,
      mute: false,
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
      this.updateDuration()
      this.fadeInAudio()
    })
    this.$audio.addEventListener('ended', () => {
      console.log( 'ended' )
    })
    this.$audio.volume = this.state.volume // force when the volume attribute is not working
  }

  componentDidUpdate() {
    // looking if context state has changed to mute the sound
    if( this.context.state.mute !== this.state.mute ) {
      this.setState(() => ({ mute: this.context.state.mute }) , () => {
        if(this.state.mute) {
          this.fadeOutAudio()
        } else {
          this.fadeInAudio()
          if(!this.state.played) this.play()
        }
      })
    }
    // looking if the context state has changed to change the current music
    if( this.context.state.currentMusic !== this.state.music_src ) {
      this.fadeOutAudio()
      clearInterval( this.timer )
      this.setState({ music_src: this.context.state.currentMusic }, () => {
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
          this.setVolume(this.$audio.volume)     
        }
      }
      console.log('fadeOut ' + this.$audio.volume)
      // When volume at 0 stop interval
      if (volume === 0.0) {
          clearInterval(fadeAudio)
      }
    }, 200)
  }

  fadeInAudio = () => {
    let fadePoint = this.$audio.currentTime + 2.5
    let fadeAudio = setInterval(() => {
      if( !this.$audio ) return
      if ((this.$audio.currentTime <= fadePoint) && (this.$audio.volume <= 1.0)) {
        if( (this.$audio.volume + 0.1 <= 1.0) ) {
          this.$audio.volume += 0.1
          this.$audio.volume = this.$audio.volume.toFixed(1)
          this.setVolume(this.$audio.volume)
        }
      }
      console.log('fadeIn ' + this.$audio.volume)
      // When volume at 1 stop interval
      if (this.$audio.volume === 1) {
          clearInterval(fadeAudio)
      }
    }, 200)
  }

  
  play = () => {
    if(this.state.mute || !this.$audio ) return
    const playPromise = this.$audio.play()
    if( playPromise !== null && !this.state.played) {
      playPromise
        .then( () => {
          this.setState({ played: true }, () => {
            this.timer = setInterval( () => {
              if(!this.$audio) return
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

  setVolume = v => {
    this.$audio.volume = v
    this.setState({ volume: v })
  }

  convertTime = time => {
    let minutes = Math.floor( time / 60 )
    let seconds = Math.floor( time - (minutes * 60) )
    if ( seconds <= 9 ) seconds = '0' + seconds
    time = minutes + ':' + seconds
    return time
  }

  updateTime = time => {
    time = Math.floor( time )
    this.setState({ currentTime: this.convertTime(time) })
  }

  updateDuration = () => {
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