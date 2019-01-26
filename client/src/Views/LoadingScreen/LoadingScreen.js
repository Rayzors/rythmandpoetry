import React, { Component } from 'react';
import styled from 'styled-components';

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
  margin-bottom: 60px;
`;
const Text = styled.p`
  text-align: center;
`;
const Introduce = styled.p`
  text-align: center;
  margin-top: 60px;
`;

class LoadingScreen extends Component {
  state = {
    progress: 0
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate() {
    if (this.state.progress === 100) {
      this.redirect();
    }
  }
  load = async () => {
    // const loader = window.setTimeout(this.redirect, 5000);
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
            <img src="/svg/headphones.svg" alt="" />
          </Headphone>
          <Text>
            Take a headphone or at least turn the sound on, <br />
            for have the best experience !
          </Text>
          <Introduce>
            Hey bro, Welcome to <b>Rythm & Poetry</b> <br />
            We will introduce you to differents era of RAP
          </Introduce>
        </Container>
      </Wrapper>
    );
  }
}

export default LoadingScreen;
