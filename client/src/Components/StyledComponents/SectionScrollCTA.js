import styled from 'styled-components';

const SectionSectionCTA = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 50px;
  background: #fff;
  color: #fff;

  ${SectionSectionCTA}::before {
    content: 'Scroll';
    position: absolute;
    top: -50%;
    left: 0;
    transform: translateX(-50%);
  }
`;

export default SectionSectionCTA;
