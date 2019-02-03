import React, { Component, Fragment } from 'react'

import { Player, PlayerButton, Controls } from './styled'

class AudioPlayer extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    const { 
      music_src,
      volume,
      getAudioHTMLElement,
    } = this.props
    return (
      <Fragment>
        <audio 
            ref={ el => getAudioHTMLElement(el) }
            volume={ volume }
        >
          <source 
              src={ music_src } 
              type="audio/mpeg"
          />
        </audio>
      </Fragment>
    )
  }
}

export default AudioPlayer