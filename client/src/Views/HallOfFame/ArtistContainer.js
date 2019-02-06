import React, { Component } from 'react'
import rapApi from '../../helpers/api'

class ArtistContainer extends Component {

    async componentDidMount() {
        const { match : { params : {id} }} = this.props
        
    }

    render() {
        return (
            <div>Lol</div>
        )
    }
}
export default ArtistContainer