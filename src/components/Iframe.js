import React from 'react';
import styled from 'styled-components';

const Model = styled.iframe `{
  margin: 0 auto;
  width: 640px;
  height: 480px;

  @media only screen and (max-width: 1200px) {
    width: 600px;
    height: 440px;
    top: -10%;
  }

  @media only screen and (max-width: 1000px) {
    width: 480px;
    height: 320px;
    position: relative;
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
}
`;

const Iframe = ({ iframeTitle, videoSrc }) => {
  return (
    <Model
      title={iframeTitle}
      width="640"
      height="480"
      src={`https://sketchfab.com/models/${videoSrc}/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;`} frameBorder="0"
      allow="autoplay">
    </Model>
  )
}

export default Iframe;