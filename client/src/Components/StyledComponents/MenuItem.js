import styled from 'styled-components';

const MenuItem = styled.div`
  padding: 10px;
  font-family: 'Montserrat';
  font-weight: 900;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  text-transform: uppercase;
  width: 230px;
  height: 100%s;
  background: ${props => `url(${props.background}), no-repeat`};
`;

export default MenuItem;