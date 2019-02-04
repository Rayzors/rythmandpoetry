import styled from 'styled-components';

const SectionCover = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.backgroundColor || "none"};
  background-image: ${props => `url(${props.backgroundImage})` || "none"};
`;

export default SectionCover;
