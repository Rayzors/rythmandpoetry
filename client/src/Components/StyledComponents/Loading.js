import React, { Fragment } from 'react';
import styled from 'styled-components';
import Wrapper from '../../Components/StyledComponents/Wrapper';
import Logo from '../Logo/Logo';

const Loading = (props) => (
  <Fragment>
    <Wrapper bg={'#000'}>
      <Logo className="logo-loader" />
    </Wrapper>
  </Fragment>
);

export default Loading;
