import React, { Component, Fragment } from 'react'

import { Player, PlayerButton, TimerContainer, ProgressBarContainer, ProgressBar, Controls } from './styled'
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
      currentTime,
      duration,
      percentage,
      getAudioHTMLElement,
      togglePlay,
      onProgressBarClick
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
          <Controls>
            <PlayerButton onClick={ togglePlay } />
          </Controls>
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