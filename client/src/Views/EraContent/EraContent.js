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
import {
  ArtistSection,
  ArtistCover,
  ArtistDescription
} from '../../Components/StyledComponents/ArtistSection';
import ArtistUnlocker from '../../Components/ArtistUnlocker/ArtistUnlocker';

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
    section_content: []
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
      artists
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
                <div class="heading">
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
                </ArtistCover>
              </ArtistSection>
            </SectionCover>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default withConsumer(EraContent);
