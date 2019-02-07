import styled from 'styled-components'

export const ArtistSection = styled.section`

    width: 80vw;  
    margin: 100px auto;
    color: #fff;

    & .heading h2 {
        text-transform: uppercase;
        font-family: Montserrat;
        font-style: italic;
        font-weight: 800;
        line-height: 60px;
        font-size: 48px;
    }

`

export const ArtistCover = styled.div`

    & img {
        margin: 55px auto;
        display: block;
        max-width: 168px;
    }

`

export const ArtistDescription = styled.div`

    width: 50%;

    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 800;
    line-height: 32px;
    font-size: 25px;
    text-align: justify;
    margin: 0 auto;
`