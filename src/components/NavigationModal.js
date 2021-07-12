import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import DeathStarIcon from './StarshipIcons/DeathStarIcon';
import StarDestroyerIcon from './StarshipIcons/StarDestroyerIcon';
import TieFighterIcon from './StarshipIcons/TieFighterIcon';
import MillenniumFalconIcon from './StarshipIcons/MillenniumFalconIcon';
import background from "../assets/navigation/nav.svg";
import cursor from "../assets/base/cursor.svg";
import { PointerMixin } from '../styled-components/mixins';


const Modal = styled.div` {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(10, 10, 10, 0.95);
  transition: all 0.5s ease-in;
}
`;

const Nav = styled.nav` {
  position: relative;
  width: 40rem;
  height: 40rem;
  border-radius: 100%;
  background: rgb(10, 10, 10);
  cursor: url(${cursor}), default;

  @media only screen and (max-width: 768px) {
    width: 24rem;
    height: 24rem;
  }
}
`;

const NavBackground = styled.img` {
  position: absolute;
  top: 49.5%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
}
`;

const NavGrid = styled.div` {
  position: absolute;
  display: grid;
  grid-template-columns: 15rem 15rem;
  grid-template-rows: 15rem 15rem;
  justify-items: center;
  align-items: center;
  top: 13%;
  left: 12%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 8rem 8rem;
    grid-template-rows: 8rem 8rem;
    top: 18%;
    left: 18%;
  }

  @media only screen and (max-width: 400px) {
    top: 17%;
    left: 13%;
  }
}
`;

const StarshipLink = styled(Link)` {
  height: auto;
  width: 4rem;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 3rem;
  }
}
`;

const Button = styled.button` {
  color: rgb(150, 150, 150);
  background-color: rgb(10, 10, 10);
  font-size: 3rem;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50.2%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  &:hover {
    color: rgb(255, 255, 255);
    ${PointerMixin}
  }

  &:active,
  &:focus {
    outline: none;
  }
}
`;

const NavigationModal = forwardRef(( props, ref ) => {

  const [display, setDisplay] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      }
    }
  )

  const handleOpen = () => {
    setDisplay(true);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return (
      <Modal>
        <Nav>
          <NavBackground src={background} alt="navigation background"></NavBackground>
          <NavGrid>
            <StarshipLink to="/millennium-falcon-model"><MillenniumFalconIcon component="navigation" position='relative' /></StarshipLink>
            <StarshipLink to="/star-destroyer-model"><StarDestroyerIcon component="navigation" position='relative' /></StarshipLink>
            <StarshipLink to="/"><DeathStarIcon component="navigation" position='relative' /></StarshipLink>
            <StarshipLink to="/tie-fighter-model"><TieFighterIcon component="navigation" position='relative' /></StarshipLink>
          </NavGrid>
        </Nav>
        <Button aria-label="close modal" onClick={handleClose}>✕</Button>
      </Modal>
    )
  }
  return null
})

export default NavigationModal;