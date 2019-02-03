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
      togglePlay,
      onProgressBarClick,
      played
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
        <Player>
          {/* LES CONTROLES SONT À ENLEVER PAR LA SUITE */}
          {/* <TimerContainer>
            <ProgressBarContainer onClick={ onProgressBarClick }>
                <ProgressBar style={{ width: percentage + '%'}} />
            </ProgressBarContainer>
          </TimerContainer> */}
        </Player>
      </Fragment>
    )
  }
}

export default AudioPlayer