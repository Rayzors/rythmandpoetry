import styled from 'styled-components';
import { tablet, laptop } from '../../helpers/media-constants';

const FloatingText = styled.p`
  font-family: "Montserrat";
  font-size: 48px;
  font-style: italic;
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
  line-height: 1.5;
  z-index: 10;
`;

export default FloatingText;