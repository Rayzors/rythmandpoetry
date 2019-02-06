import React, { Component } from 'react'
import withConsumer from '../../Higher-Order-Components/withConsumer';
import rapApi from '../../helpers/api'
import { Link } from 'react-router-dom'

import {
  Main,
  Title,
  HallContainer,
  ArtistCard,
  ArticleCardImage,
  ArticleCardName
} from '../../Components/StyledComponents/HallOfFame'


class HallOfFame extends Component {

  state = {
    artists: null
  }

  async componentDidMount() {
    const { context } = this.props
    context.setAmbientMusic('http://54.190.49.146/musics/what_so_not.mp3')
    const artists = await rapApi.getArtists()
    console.log(artists)
    this.setState({ artists })

  }
  render(){
    const { artists } = this.state
    const { isUnlockedArtist } = this.props.context
    if (artists === null) return <div>Loading</div>
    return artists && (
      <Main>
        
        <Title>The Hall Of Fame</Title>
        <HallContainer>
          {
            artists.map( artist => {
              const unlocked = isUnlockedArtist(artist.artist_id)
              return unlocked && (
              <Link key={ artist.artist_id } to={`/g/artist/${artist.artist_id}`} style={{ textDecoration: 'none' }}>
                <ArtistCard>
                  <ArticleCardImage src={ artist.artist_cover } unlocked={unlocked} />
                  <ArticleCardName style={ { textAlign: 'center'} } unlocked={unlocked} >
                    { artist.artist_name }
                  </ArticleCardName>
                </ArtistCard>
              </Link>
            ) || (
              <ArtistCard key={ artist.artist_id }>
                <ArticleCardImage src={ artist.artist_cover } unlocked={unlocked} />
                <ArticleCardName style={ { textAlign: 'center'} } unlocked={unlocked} >
                  { artist.artist_name }
                </ArticleCardName>
              </ArtistCard>
            )
          
          }
            )
          }
        </HallContainer>
        
      </Main>
    )
  }
}

export default withConsumer(HallOfFame);