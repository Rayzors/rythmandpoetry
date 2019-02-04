import React, { Fragment } from 'react'
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { PlayerButton } from './styled'

const Player = props => {
    const { mute, currentSong } = props.context.state
    const { toggleSound } = props.context
    return (
        <div>
            <div>
                {currentSong.music_title}
            </div>
            <PlayerButton className={props.className} onClick={ () => toggleSound() }>
                <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
                <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
                <div className={ !mute ? 'bar animated_bar' : 'bar'}></div>
            </PlayerButton>
        </div>
)}
export default withConsumer(Player)