import React, { Component } from 'react'
import withConsumer from '../../Higher-Order-Components/withConsumer';

class ArtistUnlocker extends Component {

    constructor() {
        super()
        this.ref = null
    }

    componentDidMount() {
        const { artistId, context, contentGetter } = this.props
        window.addEventListener('scroll', evt => {
            const { innerHeight } = window
            if(this.ref && this.ref.getBoundingClientRect().y <= innerHeight - innerHeight / 2) {
                if(!context.isUnlockedArtist( artistId )) {
                    context.addArtist(artistId)
                }
            }
        })
    }

    
    render() {
        return (
        <div ref={ ref =>  this.ref = ref }>
        </div>
        )
    }
}

export default withConsumer(ArtistUnlocker)
