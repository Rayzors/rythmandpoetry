import styled from 'styled-components';

const SectionCover = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: ${ props =>  props.alignItem === false ? '' : 'center'};
  justify-content: space-around;  
  background-color: ${props => props.backgroundColor || "none"};
  background-image: ${props => `url(${props.backgroundImage})` || "none"};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default SectionCover;
