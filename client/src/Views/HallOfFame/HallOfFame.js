import React, { Component } from 'react';
import { 
  ArtistCardImage,
  ArtistCardName,
  ArtistCard,
  HallContainer,
  Main,
  Title 
} from '../../Components/StyledComponents/HallOfFame'
import rapApi from '../../helpers/api';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Modal from './Modal';



class HallOfFame extends Component {

  state = {
    artists: null,
    modalOpened: false,
    modalArtist: {},
    currentDisplayedArtist: null
  }

  async componentDidMount() {
    const { context } = this.props
    context.setAmbientMusic( 'http://54.190.49.146/musics/what_so_not.mp3' )
    const artists = await rapApi.getArtists()
    console.log(artists)
    this.setState({ artists })
  }

  open = artist =>  this.setState( { modalOpened: true, currentDisplayedArtist: artist }) 
  close = () =>  this.setState( { modalOpened: false } ) 

  render(){
    const { artists, modalOpened, currentDisplayedArtist } = this.state
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
                <ArtistCard onClick={ () => this.open(artist) } key={ artist.artist_id } unlocked={unlocked}>
                  <ArtistCardImage src={ artist.artist_cover } unlocked={unlocked} />
                  <ArtistCardName unlocked={unlocked} >
                    { artist.artist_name }
                  </ArtistCardName>
                </ArtistCard>
                ) || (
                  <ArtistCard key={ artist.artist_id }>
                    <ArtistCardImage src={ artist.artist_cover } unlocked={unlocked} />
                    <ArtistCardName unlocked={unlocked} >
                      { artist.artist_name }
                    </ArtistCardName>
                  </ArtistCard>
                )
              }
            )
          }
        </HallContainer>
        <Modal 
          modalOpened={ modalOpened } 
          close={ this.close }
          artist={ currentDisplayedArtist }
        />
      </Main>
    )
  }
}

export default withConsumer(HallOfFame);