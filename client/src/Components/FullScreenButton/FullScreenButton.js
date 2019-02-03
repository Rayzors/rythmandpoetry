import React from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import styled from 'styled-components';


const FullScreenButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
`

export default withConsumer(FullScreenButton);