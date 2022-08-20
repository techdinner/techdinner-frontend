import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body {
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        html{
            color-scheme: dark;
        }
    }

`
export default GlobalStyle