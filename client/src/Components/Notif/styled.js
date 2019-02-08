import styled from 'styled-components'

export const Snotif = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 80px;

    background-color: #1C1C1C;
    border-radius: 0px 50px 50px 0px;

    position: fixed;
    z-index: 999;
    left: 0;
    bottom: 60px;

    color: #FFF;

    transition: transform 0.3s ease;
    transform: ${ props => props.notif ? 'translateX(0%)' : 'translateX(-100%)' };


`