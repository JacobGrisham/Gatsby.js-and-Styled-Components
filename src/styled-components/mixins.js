import { css, keyframes } from 'styled-components';
import pointer from '../assets/base/pointer.svg'
import grid from '../assets/base/small-grid.svg';

export const PointerMixin = css`
  cursor: url(${pointer}), pointer;
`

export const SymbolMixin = css`
  position: absolute;
  left: -100px;
  bottom: 0;
  z-index: -100;
  width: 400px;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`

export const Pulse = keyframes`
  0% {
    fill: rgb(85, 85, 85);
  }
  50% {
    fill: rgb(120, 120, 120);
  }
  100% {
    fill: rgb(85, 85, 85);
  }
`

export const SymbolColorMixin = css`
  animation: ${Pulse} 5s linear infinite;
`

const handleIconHoverStyle = component => {
  switch (component) {
    case 'navigation':
      return `
        filter: drop-shadow(0px 0px 7px rgb(255, 255, 255));
        background-image: none;
        border: none;
      `;
    default:
      return `
        filter: none;
        background-image: url(${grid});
        border: 2px solid white
      `;
  }
}

export const IconMixin = css`
  position: ${props => props.position};
  right: 13%;
  bottom: 20%;
  zIndex: 10;
  width: ${props => props.component === 'navigation' ? '5rem': '7rem'};
  height: auto;

  :hover {
    ${({component}) => handleIconHoverStyle(component)};
    ${PointerMixin}
  }

  @media only screen and (max-width: 1200px) {
    width: ${props => props.component === 'navigation' ? '4rem': '6rem'};
  }

  @media only screen and (max-width: 800px) {
    width: ${props => props.component === 'navigation' ? '3rem': '5rem'};
    right: 17%;
    bottom: 11%;
  }
`

export const Dash = keyframes`
  to {
      stroke-dashoffset: 0;
  }
`
const handlePathAnimation = component => {
  switch (component) {
    case 'navigation':
      return css`animation: stop;`;
    default:
      return css`
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: ${Dash} 60s linear forwards;
      `;
  }
}

export const PathMixin = css`
  ${({component}) => handlePathAnimation(component)};
`