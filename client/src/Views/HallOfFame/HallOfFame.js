import React, { Component } from 'react'
import rapApi from '../../helpers/api'

import {
  Main,
  Title,
  HallContainer,
  ArtistCard
} from '../../Components/StyledComponents /HallOfFame'

class HallOfFame extends Component {

  state = {
    artists: null
  }

  async componentDidMount() {
    const artists = await rapApi.getArtists()
    console.log(artists)
    this.setState({ artists })

  }
  render(){
    const { artists } = this.state
    if (artists === null) return <div>Loading</div>
    return artists && (
      <Main>
        
        <Title>The Hall Of Fame</Title>
        <HallContainer>
          {
            artists.map( artist => (
              <ArtistCard key={ artist.artist_id } >
                <img src={ artist.artist_cover }/>
                <p style={ { textAlign: 'center'} }>
                  { artist.artist_name }<br/>
                </p>
              </ArtistCard>
            ) )
          }
        </HallContainer>
        
      </Main>
    )
  }
}

export default HallOfFame;