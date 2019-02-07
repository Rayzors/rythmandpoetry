import React, { Fragment } from 'react';
import styled from 'styled-components';
import Wrapper from '../../Components/StyledComponents/Wrapper';

const Loading = (props) => (
  <Fragment>
    <Wrapper bg={'#000'}>
      <p color={'#fff'}>Chargement</p>
    </Wrapper>
  </Fragment>
);

export default Loading;
