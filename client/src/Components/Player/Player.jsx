import React, { Fragment } from 'react'
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { PlayerButtonContainer, PlayerButton, MusicTitle } from './styled'
import { Spring } from 'react-spring'

const Player = props => {
    const { mute, currentSong, filterValue } = props.context.state
    const { toggleSound } = props.context
    return (
      <Fragment>
          <PlayerButtonContainer>
              <MusicTitle>
                  <span>{ currentSong.music_title }</span>
              </MusicTitle>
              <PlayerButton className={props.className} onClick={ () => toggleSound() }>
                  <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
                  <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
                  <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
              </PlayerButton>
          </PlayerButtonContainer>
      </Fragment>
)}

export default withConsumer(Player)