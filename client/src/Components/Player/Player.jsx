import React from 'react'
import bars from '../../assets/images/components/player/bars.svg'
import withConsumer from '../../Higher-Order-Components/withConsumer';

const Player = props => (
    <div className={props.className}>
        <img 
            src={bars} 
            alt="toggle sound"
            onClick={ () => props.context.toggleSound() }
            />
    </div>
)
export default withConsumer(Player)