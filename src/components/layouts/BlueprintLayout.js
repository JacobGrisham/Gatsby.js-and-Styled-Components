import React from 'react'
import Head from '../Head';
import Footer from '../Footer'
import GlobalStyle from '../../styled-components/theme';
import styled, { createGlobalStyle } from 'styled-components';
import grid from "../../assets/base/grid.png"

const BlueprintBackground = createGlobalStyle`
  body {
    background-image: url(${grid});
    background-attachment: scroll;
  }
}
`

const Areubesh = styled.img `{
  position: absolute;
  left: 0;
  bottom: 0;
}
`;

const Blueprint = styled.img `{
  height: 100vh;
  min-height: 25rem;
  width: auto;
}
`;

const BlueprintLayout = ({ pageTitle, blueprintSrc, infoSrc, blueprintAlt, infoAlt }) => {
  return (
    <main>
      <BlueprintBackground/>
      <GlobalStyle />
      <Head>{pageTitle}</Head>
      <Areubesh src={infoSrc} alt={infoAlt}></Areubesh>
      <Blueprint src={blueprintSrc} alt={blueprintAlt}></Blueprint>
      <Footer />
    </main>
  )
}

export default BlueprintLayout