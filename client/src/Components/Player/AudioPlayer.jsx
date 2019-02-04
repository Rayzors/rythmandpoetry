import React, { Component, Fragment } from 'react'

class AudioPlayer extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    const { 
      music_src,
      volume,
      getAudioHTMLElement
    } = this.props
    return (
        <audio 
            ref={ el => getAudioHTMLElement(el) }
            volume={ volume }
        >
          <source 
              src={ music_src } 
              type="audio/mpeg"
          />
        </audio>
    )
  }
}

export default AudioPlayer