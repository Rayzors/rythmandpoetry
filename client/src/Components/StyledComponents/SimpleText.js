import styled from 'styled-components'

export const SimpleText = styled.div`

    width: 80%;


    & div {
        width: 50%;
        margin-bottom: 40px;
        color: #fff;
        & h2 {  
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            font-style: italic;
            font-weight: 800;
            line-height: 32px;
            font-size: 25px;
            color: #fff;
        }
        & p {
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
            font-style: italic;
            font-weight: 500;
            line-height: 32px;
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 768px) {
        & div {
            width: 100%;
        }
    }

`