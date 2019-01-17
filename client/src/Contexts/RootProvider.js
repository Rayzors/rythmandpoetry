import React, { Component } from 'react'
import rapStorage from '../helpers/storage'

const RootContext = React.createContext()
const { Provider, Consumer } = RootContext

class RootProvider extends Component {
    constructor() {
        super()
        this.state = {
            lol: 0
        }
        rapStorage.init()
        console.log(rapStorage)

        this.providerValue = {
            state: this.state,
            customLog: this.customLog,
            addArtists: this.addArtists.bind(this),
            setState: this.setState.bind(this)
        }
    }

    customLog = value => console.log(value)

    addArtists = ( artistId ) => {
        console.log('triggered with ' + artistId)
        const prevStorage = rapStorage.getItem( 'unlockedArtist' )
        if( prevStorage && !prevStorage.includes( artistId ) ) {
            console.log(prevStorage)
            const newArray = [
                ...prevStorage,
                artistId
            ]
            console.log(newArray)
            rapStorage.setItem( 'unlockedArtist', newArray )
        }
    }

    render() {
        return (
            <Provider value={ this.providerValue } >
                { this.props.children }
            </Provider>
        )
    }
}

export { Consumer }

export default RootProvider