import styled from 'styled-components'

export const VideoContainer = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    overflow: hidden;
    color: white;
    


    & video {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
        width:100%;
        height:100%;
    }

`

export const VideoContentContainer = styled.div`

    height: 100%;
    background-color: rgba(178, 17, 49, 0.4);
    position: relative;

`

export const BronxTitle =  styled.h2`
    margin: 15px auto;
    width: 348px;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 800;
    line-height: 60px;
    font-size: 48px;
    text-align: center;

    & span  {
        
        line-height: 60px;
        font-size: 68px;
    }

`

export const Bronx = styled.div`

    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    margin-bottom: 45px;

    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }

`

export const BronxContent = styled.div`
    margin-bottom: 45px;
    width: 45%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: 500;
    line-height: 32px;
    font-size: 25px;
    overflow: scroll;

    @media only screen and (max-width: 768px) {
        width: 100%
    }

`
export const BronxCover = styled.img`

    width: 50%;
    max-width: 540px;
    @media only screen and (max-width: 768px) {
        margin: 0 auto;
        width: 30%
    }
`