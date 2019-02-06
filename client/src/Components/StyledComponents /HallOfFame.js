import styled from 'styled-components'

export const Main = styled.div `

    background-color: #1C1C1C;

    width: 100vw;
    min-height: 100vh;
    padding-top: 100px;

`

export const Title = styled.h1 `
    margin: 30px 0;

    color: #FFF;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 21px;
    font-weight: 900;
    text-transform : uppercase;
    text-align: center;

`

export const HallContainer = styled.section `

    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 70%;
    margin: 0 auto;
`

export const ArtistCard = styled.article `

    min-width: 100px;
    max-width: 250px;
    padding: 0 25px;

    color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;

    & img {
        width: 100%;
        max-width: 250px;
        margin-bottom: 12px;
    }

    
`