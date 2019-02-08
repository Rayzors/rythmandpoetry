import React, { Component } from 'react'
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Notif from './Notif'

class NotifContainer extends Component {
  render() {
    const { notif } = this.props.context.state
    return (
      <Notif notif={ notif } />
    )
  }
}

export default withConsumer(NotifContainer)
