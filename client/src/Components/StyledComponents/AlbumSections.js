import styled from 'styled-components'

export const AlbumContainer = styled.div`

    margin-top: 80px;
    color: #fff;
    width: 80%;


`

export const AlbumContainerTitle = styled.h3`

    margin-bottom: 45px;

    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 800;
    line-height: 32px;
    font-size: 25px;

    text-transform: uppercase;

`

export const Album = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 45px;

    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }

`

export const AlbumContent = styled.div`
    margin-bottom: 45px;
    width: 45%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 500;
    line-height: 32px;
    font-size: 25px;

    @media only screen and (max-width: 768px) {
        width: 100%
    }

`

export const AlbumCover = styled.img`

    width: 50%;
    max-width: 540px;
    @media only screen and (max-width: 768px) {
        width: 100%
    }
`