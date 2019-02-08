import styled from 'styled-components';
import { tablet, laptop } from '../../helpers/media-constants';

const EpisodeLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  font-family: 'Playfair Display';
  @media (min-width: ${tablet}px) {
    font-size: 25px;
  }
`;

export default EpisodeLabel;