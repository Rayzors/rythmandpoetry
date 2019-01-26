import React, { Component } from 'react';
import styled from 'styled-components';


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

    const loader = window.setTimeout(this.redirect, 1000);

  }

  redirect = () => {
    const { history } = this.props;

    history.push('/home');
  }

  render() {
    return (
      <div className="LoadingScreen">
      
        mets ton casque frère

        <p>Loading ...</p>
      </div>
    )
  }

}

export default LoadingScreen;
