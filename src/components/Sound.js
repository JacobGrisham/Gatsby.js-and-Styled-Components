import React from 'react'
import useSound from 'use-sound';
import styled from 'styled-components';
import volume from "../assets/base/volume.svg"
import { PointerMixin } from '../styled-components/mixins';

// Chose to place mp3 files in a static directory at the root of the application per the documentation
// https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/
// Normally, it's not recommended, but this use case meets one of the criteria:
// "You have thousands of images and need to dynamically reference their paths."
// Furthermore, it's also recommended by the use-sound library:
// https://github.com/joshwcomeau/use-sound

const Volume = styled.img `{
  transform: translateX(1rem);
  height: auto;
  width: 6%;
  ${PointerMixin}
}
`

const Sound = ({ name }) => {

  const [play] = useSound(
    `../../static/sounds/${name}-sound.mp3`,
    { volume: 0.25 }
  );

  return (
    <Volume onClick={play} src={volume} alt="audio-player"></Volume>
  )
}

export default Sound;