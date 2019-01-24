import React, { Component } from 'react'

import { Player, PlayerButton, TimerContainer, Volume, ProgressBarContainer, ProgressBar, Controls } from './styled'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

// library.add( faPlay, faPause,faForward, faBackward )

class AudioPlayer extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    const { 
      music_src,
      volume,
      played,
      currentTime,
      duration,
      percentage,
      getAudioHTMLElement,
      onVolumeChange,
      togglePlay,
      onProgressBarClick
    } = this.props
    return (
      <Player>
        <audio 
            ref={ el => getAudioHTMLElement(el) }
            volume={ volume }
        >
          <source 
              src={ music_src } 
              type="audio/mpeg"
          />
        </audio>
        <Controls>
          <PlayerButton onClick={ togglePlay } >
              {/* <FontAwesomeIcon icon={ played ? 'pause' : 'play' }/> */}
          </PlayerButton>
        </Controls>
        <TimerContainer>
          <span>
              { currentTime } / { duration }
          </span>
          <ProgressBarContainer onClick={ onProgressBarClick }>
              <ProgressBar style={{ width: percentage + '%'}} />
          </ProgressBarContainer>
          {/* <Volume 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={ volume }
            onChange={ e => onVolumeChange(e) }
          /> */}
        </TimerContainer>
      </Player>
    )
  }
}

export default AudioPlayer