import styled from 'styled-components'
/**
 * A refaire
 */
export const Player = styled.div`
    display: flex;
`
export const PlayerButtonContainer = styled.div`
    display: flex;

    position: fixed;
    bottom: 20px;
    right: 70px;
`
export const MusicTitle = styled.div`
    color: #fff;
    font-family: sans-serif;
    position: fixed;
    right: 115px;
    bottom: 20px;
`

export const PlayerButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    & .playbutton__title-container {
        position: relative;
        right: 100%;

    }
`

export const Controls = styled.div`
    display: flex;
    & span {
        cursor: pointer;
    }
`

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export const ProgressBarContainer = styled.div`
    width: 150px;
    height: 3px;

    background-color: grey;
    border-radius: 5px;

    overflow: hidden;
`

export const ProgressBar = styled.div`
    background-color: #b31217;
    transition: width 0.5s ease;
    height: 100%;
`