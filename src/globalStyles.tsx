import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        background-color: ${props => props.theme.background};
    }

    * {
        padding: 0px; 
        margin: 0px;
        outline: 0px;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;