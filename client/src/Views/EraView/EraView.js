import React from 'react'

const EraView = (props) => {
  return (
    <div>
      <p>EraView</p>
      <h1>{props.match.params.eraNname}</h1>
    </div>
  )
}

export default EraView;
