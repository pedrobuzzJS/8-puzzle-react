import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        
        height: 100%;
        width: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    html {
        background: #eee;
    }

    :root {
        --primary: #36393f,

        --white: #fff,

        --link: #5d80d6,
    }
`;