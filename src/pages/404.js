import React from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from '../styled-components/theme';
import r2d2 from "../assets/base/R2D2.svg";

const Error = styled.main `{
  textAlign: center
}
`

const SlideLeft = keyframes`
  0% {
      right: -20%;
  }

  50% {
      right: 60%;
  }

  60% {
      right: 60%;
  }

  100% {
      right: 100%;
  }
`

const R2D2 = styled.img`{
  height:auto;
  width: 8rem;
  position: absolute;
  right: -20%;
  animation: ${SlideLeft} 12s cubic-bezier(.33,1.26,.68,1) infinite;
  
  @media only screen and (max-width: 768px) {
    {
      animation: ${SlideLeft} 6s cubic-bezier(.33,1.26,.68,1) infinite;
    }
  }
}
`

const NotFoundPage = () => {
  return(
      <Error>
        <GlobalStyle />
        <h1>Unable to retrieve from the Empire's archives</h1>
        <R2D2 onClick='r2d2' src={r2d2} alt="R2D2"></R2D2>
      </Error>
  )
}

export default NotFoundPage;