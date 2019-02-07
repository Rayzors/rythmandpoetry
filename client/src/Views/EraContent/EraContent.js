import React, { Component, Fragment } from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { Link } from 'react-router-dom';
import rapApi from '../../helpers/api';
import SectionCover from '../../Components/StyledComponents/SectionCover';
import EraIntroduction from '../../Components/EraIntroduction/EraIntroduction';
import SectionTitle from '../../Components/StyledComponents/SectionTitle';
import SectionCoverBlock from '../../Components/StyledComponents/SectionCoverBlock';
import EpisodeLabel from '../../Components/StyledComponents/EpisodeLabel';
import SectionSubtitle from '../../Components/StyledComponents/SectionSubtitle';
import SectionScrollCTA from '../../Components/StyledComponents/SectionScrollCTA';
import { ArtistSection, ArtistCover, ArtistDescription, ArtistSeeMore } from '../../Components/StyledComponents/ArtistSection';
import ArtistUnlocker from '../../Components/ArtistUnlocker/ArtistUnlocker'
import Modal from '../../Views/HallOfFame/Modal'
import { SedgwickSection, SedgwickContent, SedgwickSubtitle } from '../../Components/StyledComponents/Sedgwick';

class EraContent extends Component {
  state = {
    loading: true,
    show: false,
    section_id: null,
    section_title: '',
    section_subtitle: '',
    section_bgcolor: '',
    section_color: '',
    section_bgimage: '',
    section_content: [],
    modalOpened: false
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    // ca viendra de l'api et ca changera en fonction de l'id de l'aire
    try {
      const tracklist = await rapApi.getMusicsByEra(1); // 1 is the era id

      const datas = await rapApi.getEraById(id);

      const artists = await rapApi.getArtists();

      this.props.context.setTrackList(tracklist);

      this.setState({
        artists,
        loading: false,
        show: true,
        section_id: datas[0].section_id,
        section_title: datas[0].section_title,
        section_subtitle: datas[0].section_subtitle,
        section_bgcolor: datas[0].section_bgcolor,
        section_color: datas[0].section_color,
        section_bgimage: datas[0].section_bgimage
      });

      let content = datas.map(({ content_type, content_text }) => ({
        content_type,
        content_text
      }));

      this.setState({
        section_content: content
      });
    } catch (err) {
      console.log('Error:', err.code);
    }
  }

  createMarkup = (markup) => {
    return { __html: markup };
  };

  render() {
    const {
      loading,
      section_title,
      section_subtitle,
      section_bgcolor,
      section_bgimage,
      section_id,
      artists,
      modalOpened,
      currentDisplayedArtist
    } = this.state;

    return (
      <Fragment>
        {loading ? (
          <SectionCover backgroundColor="#000000">
            <p style={{ color: '#ffffff' }}>Chargement...</p>
          </SectionCover>
        ) : (
          <Fragment>
            <SectionCover
              backgroundImage={section_bgimage}
              backgroundColor={section_bgcolor}
            >
              <EraIntroduction>
                <SectionCoverBlock>
                  <EpisodeLabel>{`Episode ${section_id}`}</EpisodeLabel>
                  <SectionTitle>{section_title}</SectionTitle>
                  <hr />
                  <SectionSubtitle>{section_subtitle}</SectionSubtitle>
                </SectionCoverBlock>
              </EraIntroduction>
              <SectionScrollCTA />
            </SectionCover>

            <SectionCover>
              <p>lol</p>
            </SectionCover>

            <SectionCover
              style={{ backgroundColor: '#F8C918' }}
              alignItem={false}
            >
              <ArtistSection>
                <div className="heading">
                  <h2>Something born</h2>
                </div>
                <ArtistUnlocker artistId={artists[0].artist_id} />
                <ArtistCover>
                  <img src={artists[0].artist_cover} />
                  <ArtistDescription
                    dangerouslySetInnerHTML={this.createMarkup(
                      `All of a sudden, this light was bring by a hero who started to gather people with his music. Something totally new that nobody ever heard of before. this Hero was known has <span class="highlight">Kool Dj Herc.</span>`
                    )}
                  />
                  <ArtistSeeMore onClick={ () => this.setState({ currentDisplayedArtist: artists[0], modalOpened: true }) }><span>More</span></ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

            <SectionCover backgroundImage={'/images/sedgwick-ave.png'} alignItem={false} >
              <SedgwickSection>
                <SedgwickContent alignLeft>
                  <p>
                      On a hot August night in 1973, Clive Campbell, known as DJ Kool Herc, and his sister Cindy put on a ‘back to school jam’ in the recreation room of their apartment block at 1520 Sedgwick Avenue in the west Bronx. Entrance cost 25c for ‘ladies’ and 50c for ‘fellas’
                  </p>
                </SedgwickContent>
                <SedgwickContent>
                  <img src={'/images/KoolHercParty.jpg'} />
                </SedgwickContent>
                <SedgwickSubtitle>
                  <p>
                    The party was not simply a huge success
                  </p>
                </SedgwickSubtitle>
                <SedgwickSubtitle heading >
                  <p>
                    It was iconic
                  </p>
                </SedgwickSubtitle>
              </SedgwickSection>
            </SectionCover>

            <SectionCover style={{ backgroundColor: "#F8C918" }} alignItem={false}>
              <ArtistSection>
                <div className="heading">
                  <h2>The seed is planted</h2>
                </div>
                <ArtistUnlocker artistId={ artists[1].artist_id } />
                <ArtistCover>
                  <img src={ artists[1].artist_cover } />
                  <ArtistDescription dangerouslySetInnerHTML={this.createMarkup(`<span class="highlight">Afrika bambaataa</span> is from the East Side of the Bronx and he was a Gang Member of the Black Spades but after loosing some friends he formed a group named “Zulu Nation” peacefull and trying to calm the youth with art and music a group designed to promote hip hop and championning messages of peace, love and unity`)} />
                  <ArtistSeeMore onClick={ () => this.setState({ currentDisplayedArtist: artists[1], modalOpened: true }) }><span>More</span></ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

            <SectionCover style={{ backgroundColor: "#F8C918" }} alignItem={false}>
              <ArtistSection>
                <div className="heading">
                  <h2>Something born</h2>
                </div>
                <ArtistUnlocker artistId={ artists[2].artist_id } />
                <ArtistCover>
                  <img src={ artists[2].artist_cover } />
                  <ArtistDescription dangerouslySetInnerHTML={this.createMarkup(`All of a sudden, this light was bring by a hero who started to gather people with his music. Something totally new that nobody ever heard of before. this Hero was known has <span class="highlight">Kool Dj Herc.</span>`)} />
                  <ArtistSeeMore onClick={ () => this.setState({ currentDisplayedArtist: artists[2], modalOpened: true }) }><span>More</span></ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

          </Fragment>
        )}
        <Modal 
          modalOpened={ modalOpened } 
          close={ this.close }
          artist={ currentDisplayedArtist }
        />
      </Fragment>
    );
  }
}

export default withConsumer(EraContent);
