import styled from 'styled-components';

const MenuItem = styled.div`
  padding: 10px;
  font-family: 'Montserrat';
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  text-transform: uppercase;
  height: 100%;
  position: relative; 
  background: ${props => `no-repeat center url(${props.background})`};
  transition: all ease-in-out .3s;
  &:hover{
    transform: scale(1.02);
  }
`;

export default MenuItem;