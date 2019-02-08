import React, { Component, Fragment } from 'react';
import EraView from '../../Components/EraView/EraView';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import { Spring } from 'react-spring';
import rapApi from '../../helpers/api';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import './EraSelect.css';
import HallOfFame from '../HallOfFame/HallOfFame';
import Loading from '../../Components/StyledComponents/Loading';

class EraSelectContainer extends Component {
  constructor() {
    super();
    this.isScrolling = false;
    this.myRef = React.createRef();
    this.state = {
      eras: [],
      current: 0,
      from: 0,
      to: 0
    };
  }
  async componentDidMount() {
    const apiEras = await rapApi.getEras();
    const tracklist = await rapApi.getMusicsByEra(0); // 0 is the home id
    this.props.context.setTrackList(tracklist);
    this.setState({
      eras: [...apiEras]
    });
  }
  handleWheel = (e, current) => {
    e.preventDefault();
    e.persist();
    const scrollDirection = e.deltaY > 0 || e.deltaX < 0 ? -1 : 1;
    if (
      (scrollDirection === -1 && current === 1) ||
      (current === this.state.eras.length + 1 && scrollDirection === 1)
    ) {
      // scrolling to the previous in the first page or scrolling to the next in the last page
      return false;
    }
    if (
      (e.deltaY >= 40 ||
        e.deltaY <= -40 ||
        e.deltaX >= 20 ||
        e.deltaX <= -20) &&
      !this.isScrolling
    ) {
      this.isScrolling = !this.isScrolling;
      const from = current - 1;
      const to = current + scrollDirection - 1;
      this.setState(
        () => ({
          from,
          to,
          current: to
        }),
        () => {
          // callback
          if (e.deltaY > 0 || e.deltaX < 0) {
            // scroll up
            this.parallax.scrollTo(current - 2);
            setTimeout(() => (this.isScrolling = !this.isScrolling), 1000);
          } else if (e.deltaY < 0 || e.deltaX > 0) {
            // scroll down
            this.parallax.scrollTo(current);
            setTimeout(() => (this.isScrolling = !this.isScrolling), 1000);
          }
        }
      );
    }
  };

  render() {
    const { eras, from, to } = this.state;
    if (eras.length === 0) {
      return <Loading />;
    }
    return (
      eras.length > 0 && (
        <Fragment>
          <Spring
            from={{
              bgcolor: eras[from] ? eras[from].section_bgcolor : '#5e0821'
            }}
            to={{ bgcolor: eras[to] ? eras[to].section_bgcolor : '#1C1C1C' }}
          >
            {(springProps) => (
              <Fragment>
                <Parallax
                  className="EraSelectContainer"
                  ref={(ref) => (this.parallax = ref)}
                  style={{ backgroundColor: springProps.bgcolor }}
                  pages={eras.length + 1}
                  horizontal
                  scrolling={false}
                  native
                >
                  {eras.map((era, i) => (
                    <EraView
                      {...era}
                      key={i}
                      handleWheel={this.handleWheel}
                      length={eras.length}
                      current={i + 1}
                    />
                  ))}
                  <ParallaxLayer
                    offset={eras.length}
                    onWheel={(e, eras) =>
                      this.handleWheel(e, this.state.eras.length + 1)
                    }
                  >
                    <HallOfFame />
                  </ParallaxLayer>
                </Parallax>
              </Fragment>
            )}
          </Spring>
        </Fragment>
      )
    );
  }
}

export default withConsumer(EraSelectContainer);
