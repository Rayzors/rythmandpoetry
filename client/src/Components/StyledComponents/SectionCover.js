import styled from 'styled-components';

const SectionCover = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => props.backgroundColor || 'none'};
  background-image: ${(props) => `url(${props.backgroundImage})` || 'none'};
  position: relative;
`;

export default SectionCover;
