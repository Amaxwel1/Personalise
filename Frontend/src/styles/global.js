import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, Arial, sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
        font-family: "Poppins";

    }


`;

export default GlobalStyle;
