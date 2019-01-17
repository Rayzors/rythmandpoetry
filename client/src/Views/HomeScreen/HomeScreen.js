import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Contexts/RootProvider'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Hey bro, Welcome to <strong>rythm and poetry</strong>. <br/> We will introduce you to different kind of rap.</p>
        <Link to="/select">Start</Link>
        <Consumer>
          {
            context => {
              return(
                // Test of addArtist & setState 
                <button onClick={
                  () => context.setState( prevState => ({ lol: prevState.lol + 1 }), 
                  () => context.addArtist(context.state.lol) )
                }>log</button>
              )
            }
          }
        </Consumer>
      </div>
    )
  }
}

export default HomeScreen;