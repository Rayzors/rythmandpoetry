import styled from 'styled-components'

export const Player = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 300px;
    padding: 15px;
    border: solid #000 1px;   
`

export const PlayerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    border-radius: 100%;
    border: solid #000 2px;
    cursor: pointer;
`

export const Controls = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 110px;

    & span {
        cursor: pointer;
    }
`

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Volume = styled.input`
    /* reset input[type=range] */
    &[type=range] {
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 100%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */
    }

    &[type=range]::-moz-focus-outer {
        border: 0;
    }

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    &[type=range]:focus {
        outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    &[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent; 
        border-color: transparent;
        color: transparent;
    }
    /* end reset input[type=range] */
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