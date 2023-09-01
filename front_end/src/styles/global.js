import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins' , sans-serif;
    }

    body{
        // width: 100vh;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #bebebe;
    }
`;

export default Global;