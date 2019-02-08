import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${(props) =>
    props.bg || '#062444 url(/images/loading_bg.png) center center no-repeat'};
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export default Wrapper;
