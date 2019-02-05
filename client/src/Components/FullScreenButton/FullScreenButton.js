import React from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import styled from 'styled-components';
import img from '../../assets/images/fullscreen.png';

const FullScreenButton = styled.button`
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background: url(${img}) center no-repeat;
  outline: none;
  border: none; 
  cursor: pointer;
`

export default withConsumer(FullScreenButton);