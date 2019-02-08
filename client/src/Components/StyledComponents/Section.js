import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : null};
`;

export default Section;