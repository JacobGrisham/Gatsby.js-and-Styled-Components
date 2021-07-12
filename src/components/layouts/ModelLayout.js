import React from 'react';
import Head from '../Head';
import Footer from '../Footer'
import GlobalStyle from '../../styled-components/theme';
import styled from 'styled-components';
import desktop_background from "../../assets/base/desktop-background.svg"
import mobile_background from "../../assets/base/mobile-background.svg"


const ModelBackground = styled.img `{
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 800px) {
    display: none;
  }
}
`;

const ModelMobileBackground = styled.img `{
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
}
`;

const Header = styled.header `{
  font-family: "Aurebesh";
  letter-spacing: 1rem;
  color: rgb(150, 150, 150);
  width: 60vw;
  position: absolute;
  top: 3%;
  left: 2%;

  @media only screen and (max-width: 1000px){
    font-size: 0.9rem;
    letter-spacing: 5px;
  }

  @media only screen and (max-width: 800px){
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
}
`;

const Specs = styled.div `{
  position: absolute;
  left: 5%;
  bottom: 4%;
  text-transform: uppercase;
  font-size: 1.2rem;
  width: 30rem;

  @media only screen and (max-width: 1000px){
    font-size: 1rem;
  }

  @media only screen and (max-width: 800px){
    width: 16rem;
  }

  @media only screen and (max-width: 500px){
    display: none;
  }
}
`;

const ModelLayout = ({ pageTitle, manufacturer, model, starshipclass }) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>{pageTitle}</Head>
      <ModelBackground src={desktop_background}></ModelBackground>
      <ModelMobileBackground src={mobile_background}></ModelMobileBackground>
      <Header>{manufacturer}</Header>
      <Specs>
          <p>model: {model}</p>
          <p>manufacturer: {manufacturer}</p>
          <p>starship class: {starshipclass}</p>
      </Specs>
      <Footer />
    </React.Fragment>
  )
}

export default ModelLayout;