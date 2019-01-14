import React, { Component } from 'react';

class LoadingScreen extends Component {

  componentDidMount(){

    this.load()

  }

  load = async () => {

    const loader = window.setTimeout(this.redirect, 5000);

  }

  redirect = () => {
    const {history} = this.props;

    history.push('/home');
  }

  render() {
    return (
      <div>
        mets ton casque frère

        <p>Loading ...</p>
      </div>
    )
  }

}

export default LoadingScreen;
