import styled from 'styled-components'
import Player from '../Player'

const HomePlayer = styled(Player)`
    position: absolute;
    z-index: 3;

    & img {
        width: 28px;
        cursor: pointer;
    }
`

export default HomePlayer