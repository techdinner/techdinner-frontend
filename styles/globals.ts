import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    /* @media (prefers-color-scheme: dark) {
        html{
            color-scheme: dark;
        }
    } */

    main{
        background-color: ${colors.back};
        height: 100%;
        padding: 5px;
        *{
            color: ${colors.text};
        }
    }

`;
export default GlobalStyle;
