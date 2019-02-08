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
import ParallaxSection from '../../Components/ParallaxSection/ParallaxSection';


import Loading from '../../Components/StyledComponents/Loading';
import { ArtistSection, ArtistCover, ArtistDescription, ArtistSeeMore } from '../../Components/StyledComponents/ArtistSection';
import ArtistUnlocker from '../../Components/ArtistUnlocker/ArtistUnlocker'
import Modal from '../../Views/HallOfFame/Modal'
import { SedgwickSection, SedgwickContent, SedgwickSubtitle } from '../../Components/StyledComponents/Sedgwick';
import { SimpleText } from '../../Components/StyledComponents/SimpleText'
import { AlbumContainer, AlbumContainerTitle, Album, AlbumContent, AlbumCover } from '../../Components/StyledComponents/AlbumSections';
import { VideoContainer, VideoContentContainer, BronxTitle, Bronx, BronxContent, BronxCover } from '../../Components/StyledComponents/BronxBurning';

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

  open = (artist) => this.setState({ modalOpened: true, currentDisplayedArtist: artist });

  close = () => this.setState({ modalOpened: false });

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
          <Loading />
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

                  <SectionSubtitle>{section_subtitle}</SectionSubtitle>
                </SectionCoverBlock>
              </EraIntroduction>
              <SectionScrollCTA />
            </SectionCover>

            <ParallaxSection/>

            <SectionCover >
            <VideoContainer style={{ padding: '3em' }}>
              <video muted autoPlay loop>
                <source src="/images/bronxIsBurningVIDEO.mp4" /> 
              </video>
              <VideoContentContainer>
                <BronxTitle>
                  Bronx&nbsp;is<br/>
                  <span>BURNING</span>
                </BronxTitle>
                <Bronx data-aos="fade-right" style={{ margin: '100px 50px auto 50px' }}>
                  <BronxContent>
                    <p>
                    Long time ago in the bronx neighborhood, the crime and delinquency was making the rules. 
                    This strange place was also known has «  planet rock » was the cradle of a divided community, where gangs, drugs and violence was dime a dozen. <br/><br/>

                    In 1970, Robert Moses, an Urbanist begins the construction of the cross Bronx Highway, forcing the wealthiest population to move out due to the drop of the interest rate. there remained only poor people. 
                    This situation resulted in an incrementation of criminality and some people voluntary stetted fire to building to earn the insurance money this was the beginning of a mess.<br/><br/>

                    From this cold and sad atmosphere, the planet rock needed something to bring people together, something joyfull and warm.
                    </p>
                  </BronxContent>
                  <BronxCover src={ '/images/video.png' } />
                </Bronx>
                <BronxTitle style={{ width: 'auto', marginTop: '100px' }}>
                  <span>AND IS ON THIS CHAOS</span>
                </BronxTitle>
              </VideoContentContainer>
            </VideoContainer>
            </SectionCover>

            <SectionCover style={{ backgroundColor: "#F8C918" }} alignItem={false}>
              <ArtistSection data-aos="fade-right">
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
                  <ArtistSeeMore
                    onClick={() =>
                      this.setState({
                        currentDisplayedArtist: artists[0],
                        modalOpened: true
                      })
                    }
                  >
                    <span>More</span>
                  </ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

            <SectionCover
              backgroundImage={'/images/sedgwick-ave.png'}
              alignItem={false}
            >
              <SedgwickSection>
                <SedgwickContent alignLeft data-aos="fade-right">
                  <p>
                    On a hot August night in 1973, Clive Campbell, known as DJ
                    Kool Herc, and his sister Cindy put on a ‘back to school
                    jam’ in the recreation room of their apartment block at 1520
                    Sedgwick Avenue in the west Bronx. Entrance cost 25c for
                    ‘ladies’ and 50c for ‘fellas’
                  </p>
                </SedgwickContent>
                <SedgwickContent data-aos="fade-left">
                  <img src={'/images/KoolHercParty.jpg'} />
                </SedgwickContent>
                <SedgwickSubtitle data-aos="fade-up">
                  <p>
                    The party was not simply a huge success
                  </p>
                </SedgwickSubtitle>
                <SedgwickSubtitle heading data-aos="fade-up">
                  <p>
                    It was iconic
                  </p>
                </SedgwickSubtitle>
              </SedgwickSection>
            </SectionCover>

            <SectionCover backgroundImage={"/images/KoolHercBD.jpg"} minHeight={'70vh'} alignItem={false} >
              <SimpleText style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} data-aos="fade-right">
                <div>
                  <h2>
                    IF IT WAS ICONIC IS ALSO BECAUSE OF KOOL HERC MATE COKE LA
                    ROCK THE 1ST RAPPER OF HISTORY
                  </h2>
                </div>
                <div>
                  <p>
                    the next day Kool Herc’s name was resounding across the
                    Bronx. Herc’s technique was an innovation that would become
                    the blueprint for hip-hop music.
                  </p>
                </div>
                <div>
                  <p>
                    he used a two-record turntable to spin two copies of the
                    same record in order to elongate the “break
                  </p>
                </div>
              </SimpleText>
            </SectionCover>

            <SectionCover style={{ backgroundColor: "#F8C918" }} alignItem={false}>
              <ArtistSection data-aos="fade-right">
                <div className="heading">
                  <h2>The seed is planted</h2>
                </div>
                <ArtistUnlocker artistId={artists[1].artist_id} />
                <ArtistCover>
                  <img src={ artists[1].artist_cover } />
                  <ArtistDescription dangerouslySetInnerHTML={this.createMarkup(`THE LUCKY FEW WHO WITNESSeD IT, KOOL HERC “BREAKS” ARE FIrst hip hop and raps converts<br/><br/>And one of those is a young DJ<br/><br/><span class="highlight">Afrika bambaataa</span> is from the East Side of the Bronx and he was a Gang Member of the Black Spades but after loosing some friends he formed a group named “Zulu Nation” peacefull and trying to calm the youth with art and music a group designed to promote hip hop and championning messages of peace, love and unity`)} />
                  <ArtistSeeMore onClick={ () => this.setState({ currentDisplayedArtist: artists[1], modalOpened: true }) }><span>More</span></ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

            <SectionCover style={{ backgroundColor: "#F8C918" }} alignItem={false}>
              <ArtistSection data-aos="fade-left">
                <div className="heading">
                  <h2>HIP HOP WAS STILL VERY RAW</h2>
                </div>
                <ArtistUnlocker artistId={artists[2].artist_id} />
                <ArtistCover>
                  <img src={ artists[2].artist_cover } />
                  <ArtistDescription dangerouslySetInnerHTML={this.createMarkup(`But there was someone working on changing that someone perfectioning What Kool Herc & Afrika Bambata had started<br/><br/><span class="highlight">GRANDMASTER FLASH</span>`)} />
                  <ArtistSeeMore onClick={ () => this.setState({ currentDisplayedArtist: artists[2], modalOpened: true }) }><span>More</span></ArtistSeeMore>
                </ArtistCover>
              </ArtistSection>
            </SectionCover>

            <SectionCover backgroundImage={"/images/HHFT-FLASH.png"} minHeight={'70vh'} alignItem={false}>
              <SimpleText style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} data-aos="fade-right">
                <div>
                  <p>
                    Grandmaster Flash was frustrated with the radio blends in
                    and out of mixes and with Herc’s “disarray unison.”
                    Grandmaster Flash called Herc’s technique “disarray unison”
                    because it was impossible to catch the break perfectly every
                    time. He developed a technique where he marked the record
                    with crayon, indicating where the break was. He never had to
                    guess where the break was on the record and consistently
                    caught it. Another technique Grandmaster Flash used was to
                    start and stop the record with his hands. It was frowned
                    upon to put your hands in the middle of a record, but this
                    technique gave him complete control. Finally, turntables
                    where being used as an instrument and DJs where now editing
                    music
                  </p>
                </div>
              </SimpleText>
            </SectionCover>

            <SectionCover backgroundColor={'#561222'} alignItem={false}>
              <AlbumContainer>
                <AlbumContainerTitle data-aos="fade-right">when the beats meet the rhymes</AlbumContainerTitle>
                <Album data-aos="fade-right">
                  <AlbumContent>
                    <p>
                      Grandmaster Flash rapped and made the shout outs on his
                      own at first, but he knew if he wanted to remain
                      innovative and retain his flawless turntable technique he
                      needed some help.
                      <br />
                      <br /> He worked for a short time in 1978-79 with Kurtis
                      Blow before recruiting a few of his friends Keith (Cowboy)
                      Wiggins, and two brothers, Melvin (Melle Mel) and the
                      older sibling, Nathaniel (Kidd Creole) Glover. They soon
                      began writing their own rhymes and calling themselves The
                      Three MC’s. Over time they added in Guy (Rahiem) Williams
                      and Eddie (Mr. Ness/Scorpio) Morris and became the
                      legendary group Grandmaster Flash and the Furious Five.
                    </p>
                  </AlbumContent>
                  <AlbumCover src={'/images/furiousfive.png'} />
                </Album>
                <Album data-aos="fade-right">
                  <AlbumContent>
                    <p>
                      One of the more impactfull song of the Furious Five is The
                      Message. He changed the playing field for what a rap
                      record could do. It showed that you could make things
                      other than party songs and still sell records
                    </p>
                  </AlbumContent>
                  <AlbumCover src={'/images/the_message.png'} />
                </Album>
              </AlbumContainer>
            </SectionCover>
          </Fragment>
        )}
        <Modal
          modalOpened={modalOpened}
          close={this.close}
          artist={currentDisplayedArtist}
        />
      </Fragment>
    );
  }
}

export default withConsumer(EraContent);
