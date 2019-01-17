import React from 'react'
import { Spring } from 'react-spring'
import Wrapper from '../Wrapper/Wrapper'

const EraView = (props) => {
  return (
    <Wrapper>
      <h1>{props.name}</h1>
    </Wrapper>
  )
}

export default EraView;