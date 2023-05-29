import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        background-color: ${({theme}) => theme.background};
        position: relative;
    }

    * {
        padding: 0px; 
        margin: 0px;
        outline: 0px;
        box-sizing: border-box;
        color: ${props => props.theme.colors.white};
    }

    div {
        max-height: calc(100vh - 24px);
    }

    .page {
        width: 100%;
    }
`;

export default GlobalStyle;