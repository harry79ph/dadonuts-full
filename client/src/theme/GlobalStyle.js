import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Architects Daughter', cursive;
        letter-spacing: 0.03em;
    }
    html, body {
        height: 100%;
        line-height: 1.2;
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        font: inherit;
    }

    body > div {
        overflow-x: hidden;
    }
    
    ol, ul, li {
        list-style: none;
    }
    button {
        font-weight: 700;
        border-radius: 2px;
        cursor: pointer;
    }
    p {
        letter-spacing: 0.05em;
    }
    span {
        letter-spacing: 0.01em;
    }
    a {
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
        letter-spacing: 0.01em;
    }
    img {
        border-style: none;
    }
    /* Remove the inner border and padding in Firefox. */
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    textarea {
        overflow: auto;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    svg {
        filter: drop-shadow(0px 0px 3px rgba(255, 0, 178, 0.1));
        @media screen and (max-width: 650px) {
            filter: drop-shadow(0px 0px 3px rgba(255, 0, 178, 0.05));
        }
    }
`;

export default GlobalStyle;