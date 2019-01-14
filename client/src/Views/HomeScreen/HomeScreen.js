import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Hey bro, Welcome to <strong>rythm and poetry</strong>. <br/> We will introduce you to different kind of rap.</p>
        <Link to="/select">Start</Link>
      </div>
    )
  }
}

export default HomeScreen;