import styled from 'styled-components'

export const Main = styled.div `

    /* background-color: #1C1C1C; */

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
    padding: 0 25px;

    color: #fff;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;
    
    transform: ${ props => props.unlocked ? 'scale(1.05)' : '' };

    cursor: ${ props => props.unlocked ? 'pointer' : 'default' };
`

export const ArtistCardImage = styled.img`

    width: 100%;
    max-width: 250px;

    filter: ${ props => props.unlocked === true ? 'none' : 'grayscale(100%)'};
    
`

export const ArtistCardName = styled.p`

    display: ${ props => props.unlocked === true ? 'block' : 'none'};
    margin-bottom: 32px;
    text-align: center;

`

export const ModalOverlay = styled.div`

    overflow: hidden;

`

export const ModalContainer = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 80px;
    height: calc(100vh - 80px);
    width: 90%;
    max-width: 800px;

`

export const ModalCloser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    margin: 24px auto;

    background-color: #F8C918;
    border-radius: 100%;
    color: #1C1C1C;

    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: 900;
    line-height: 15px;
    font-size: 11px;

    cursor: pointer;
`

export const ModalCard = styled.article`
    
    margin-bottom: 24px;

    color: #000;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;

`

export const ModalCardImage = styled.img`

    width: 100%;
    max-width: 250px;

    filter: ${ props => props.unlocked === true ? 'none' : 'grayscale(100%)'};
    
`

export const ModalTitle = styled.h2`

    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 900;
    line-height: 15px;
    font-size: 28px;
    text-transform: uppercase;

    color: #1C1C1C;

`

export const ModalContent = styled.div`

    margin-top: 74px;
    height: 100%;

    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 500;
    line-height: 36px;
    font-size: 24px;

    color: #1C1C1C;

    overflow: scroll;

`