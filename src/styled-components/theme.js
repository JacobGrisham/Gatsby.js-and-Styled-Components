import { createGlobalStyle } from 'styled-components';
import cursor from '../assets/base/cursor.svg'
import AurebeshWoff from '../assets/base/fonts/Aurebesh-AF-Canon-Tech.woff';
import AurebeshWoff2 from '../assets/base/fonts/Aurebesh-AF-Canon-Tech.woff2';

const GlobalStyle = createGlobalStyle`
  body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: rgb(0,0,0);
      font-family: 'Prompt', sans-serif;
      color: white;
      cursor: url(${cursor}), auto;
      overflow: hidden;
  }

  p {
      margin: 0 0;
  }

  @font-face {
        font-family: Aurebesh;
        src: url(${AurebeshWoff2}) format('woff2'), url(${AurebeshWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

  ::selection {
      background-color: rgb(200, 200, 200);
  }
`

export default GlobalStyle;