import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:: after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.background.primary};
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 16px;

        /**
         * iOS Safari doesn't respect the user-scalable=no meta tag since iOS 10
         * https://stackoverflow.com/questions/65100185/how-to-disable-all-zoom-on-mobile-safari
         */
        touch-action: pan-x pan-y;

        @media screen and (max-width: 768px) {
        min-width: 360px;
        }
    }


    ol, ul{
    list-style: none;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-family: Pretendard-Regular;
    }

    p, span {
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;
