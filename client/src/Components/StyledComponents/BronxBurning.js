import styled from 'styled-components'

export const VideoContainer = styled.div`

    position: relative;


    & video {
        z-index: -1;
        object-fit: cover;
        width:100%;
        height:100%;
    }

`