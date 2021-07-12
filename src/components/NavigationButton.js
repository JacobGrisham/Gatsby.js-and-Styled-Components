import React from 'react'
import styled, { keyframes } from 'styled-components';
import { PointerMixin } from '../styled-components/mixins';
import useSound from 'use-sound';

const Blink = keyframes`
  0 {
    fill: rgb(100, 100, 100);
  }
  100% {
    fill: rgb(200, 200, 200);
  }
`;

const Pulse = keyframes `
  0% {
    filter: drop-shadow(0 0 10px rgb(255 255 255 / 1));
  }
  100% {
    filter: drop-shadow(0 0 35px rgb(230 230 230 / 0.5));
  }
`;

const Stroke = keyframes `
  to {
      stroke-dashoffset: 0;
      r: 19.5
    }
`;

const OpenModal = styled.circle` {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${Blink} 1s alternate-reverse infinite;

  &:hover {
    fill: rgb(255, 255, 255);
    animation: ${Pulse} 1s infinite;
    ${PointerMixin}
  }

  &:active {
    animation: ${Stroke} 1s ease-out forwards;
  }
}
`;

const NavigationButton = ({modalRef}) => {

  const [play, { stop }] = useSound(
    `../../static/sounds/beep-sound.mp3`,
    { volume: 0.5 }
  );

  

  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="114" height="128">
        <g data-name="Group 56" transform="translate(-150 -611)">
          <g data-name="Union 1" fill="#000000">
            <path d="M150 779V667.926a57 57 0 01114 0V779z"/>
            <path d="M263 778V667.926c0-7.55-1.48-14.874-4.4-21.768a55.906 55.906 0 00-5.163-9.5 56.35 56.35 0 00-6.839-8.277 56.392 56.392 0 00-8.288-6.83 56.026 56.026 0 00-9.512-5.156c-6.903-2.916-14.237-4.395-21.797-4.395-7.561 0-14.895 1.479-21.799 4.395a56.026 56.026 0 00-9.512 5.156 56.39 56.39 0 00-8.288 6.83 56.349 56.349 0 00-6.839 8.277 55.906 55.906 0 00-5.163 9.5c-2.92 6.894-4.4 14.218-4.4 21.768V778h112m1 1H150V667.926c0-31.44 25.52-56.926 57-56.926s57 25.487 57 56.926V779z" fill="#fff"/>
          </g>
          <g data-name="Ellipse 7" transform="translate(179 630)" fill="none" stroke="#fff">
            <circle cx="28.5" cy="28.5" r="28.5" stroke="none"/>
            <circle cx="28.5" cy="28.5" r="28"/>
          </g>
          <OpenModal onClick={ modalRef } onMouseEnter={ play } onMouseLeave={ stop } data-name="Ellipse 8" cx="22.5" cy="22.5" r="22.5" stroke="#FFF" stroke-width="5" transform="translate(185 636)" fill="rgb(150, 150, 150)" />
        </g>
      </svg>
  )
}

export default NavigationButton;