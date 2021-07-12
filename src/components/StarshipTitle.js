import React from 'react'
import Sound from '../components/Sound';
import styled from 'styled-components';

const StyledStarshipTitle = styled.h1 `{
  text-transform: uppercase;
  letter-spacing: 15px;
  display: flex;
  position: absolute;
  top: 10%;
  left: 2%;

  @media only screen and (max-width: 1200px) {
    {
      font-size: 2rem;
      letter-spacing: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    {
      font-size: 1.5rem;
      letter-spacing: 10px;
    }
  }
}
`

const StarshipTitle = ({starship, name}) => {
  return (
    <StyledStarshipTitle>
      {starship}
      <Sound name={name}></Sound>
    </StyledStarshipTitle>
  )
}

export default StarshipTitle;