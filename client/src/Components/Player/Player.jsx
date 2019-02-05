import React from 'react'
import bars from '../../assets/images/components/player/bars.svg'
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { PlayerButton } from './styled'

const Player = props => {
    const { mute } = props.context.state
    const { toggleSound } = props.context
    return (
     <PlayerButton className={props.className} onClick={ () => toggleSound() }>
        <div className={ !mute ? 'bar animated_bar' : 'bar' }></div>
        <div className={ !mute ? 'bar animated_bar' : 'bar' }></div>
        <div className={ !mute ? 'bar animated_bar' : 'bar' }></div>
    </PlayerButton>
)}
export default withConsumer(Player)