import { injectGlobal } from 'react-emotion';
import normalize from './normalize';

const globalStyles = injectGlobal`
  ${normalize}
  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html {
    background: aliceblue;
    font-family: Roboto, Arial;
    font-size: 0.8em;
    color: #666;
    height: 100%;
  }
  body, #root {
    height: 100vh;
  }
`

export default globalStyles;