import React, { Component } from 'react';
import { Spring } from 'react-spring';
import styled from 'styled-components';
import HeadphoneSVG from '../../Components/HeadphoneSVG/HeadphoneSVG';

const Wrapper = styled.section`
  background: #062444 url(/images/loading_bg.png) center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1em;
`;
const Headphone = styled.div`
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
  margin-top: 60px;
`;
const Progressbar = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
`;
const ProgressbarInner = styled.div`
  width: 0%;
  height: 2px;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.5);
`;

class LoadingScreen extends Component {
  state = {
    progress: 0,
    loader: null
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate() {
    if (this.state.progress > 100) {
      clearInterval(this.state.loader);
      this.redirect();
    }
  }
  load = () => {
    this.setState({
      loader: window.setInterval(() => {
        this.setState((prevState) => ({ progress: prevState.progress + 3 }));
        console.log('interval');
      }, 200)
    });
  };
  redirect = () => {
    const { history } = this.props;
    history.push('/home');
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <Headphone>
            <HeadphoneSVG />
          </Headphone>
          <Text>
            Take a headphone or at least turn the sound on, <br />
            to have the best experience !
          </Text>
          <Text>
            Hey bro, Welcome to <b>Rythm & Poetry</b> <br />
            We will introduce you to differents era of RAP
          </Text>
          <Spring
            from={{ width: `0%` }}
            to={{ width: `${this.state.progress}%` }}
          >
            {(props) => (
              <Progressbar>
                <ProgressbarInner style={props} />
              </Progressbar>
            )}
          </Spring>
        </Container>
      </Wrapper>
    );
  }
}

export default LoadingScreen;
