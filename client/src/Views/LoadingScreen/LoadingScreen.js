import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #062444;
  height: 100vh;
  width: 100vw;
`;


class LoadingScreen extends Component {
  state = {
    progress: 0
  }

  componentDidMount(){

    this.load()

  }
  
  componentDidUpdate(){
    if(this.state.progress === 100){
      this.redirect()
    }
  }

  load = async () => {

    const loader = window.setTimeout(this.redirect, 5);

  }

  redirect = () => {
    const { history } = this.props;

    history.push('/home');
  }

  render() {
    return (
      <Wrapper>
        mets ton casque frère

        <p>Loading ...</p>
      </Wrapper>
    )
  }

}

export default LoadingScreen;
