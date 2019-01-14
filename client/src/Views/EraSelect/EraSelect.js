import React, { Component, Fragment } from 'react'

class EraSelect extends Component {
  state = {
    eras: [
      {name: "the beggening of a new Era"},
      {name: "The rise of golden Era"},
      {name: "The Mumble Rap"}
    ],
  }
  render() {
    const {eras} = this.state;
    return (
      <Fragment>
        {eras.map((era, i) => (
          <div key={i}>
            <p>{era.name}</p>
          </div>
        ))}
      </Fragment>
    )
  }
}

export default EraSelect;