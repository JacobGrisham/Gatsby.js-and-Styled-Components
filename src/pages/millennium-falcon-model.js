import React from 'react'
import ModelLayout from '../components/layouts/ModelLayout';
import Iframe from '../components/Iframe';
import RebelsSymbol from "../components/GalacticSymbols/RebelsSymbol";
import StarshipTitle from '../components/StarshipTitle';
import MillenniumFalconIcon from "../components/StarshipIcons/MillenniumFalconIcon";
import { css } from 'styled-components';
import { Link } from 'gatsby'

const mfIcon = css `
    right: 10%;
    bottom: 15%;

    @media only screen and (max-width: 800px) {
        right: 22%;
        bottom: 6%;
    }
`;

const MillenniumFalconModel = () => {
    return (
        <main>
            <ModelLayout
                pageTitle="Millennium Falcon 3D Model"
                manufacturer="Corellian Engineering Corporation"
                model="YT-1300 light freighter"
                starshipclass="Light freighter">
            </ModelLayout>

            <StarshipTitle
                starship="Millennium Falcon"
                play='mf'>
            </StarshipTitle>

            <Iframe
                iframeTitle="Star Wars Millennium Falcon 3D Model"
                videoSrc="79e82b980b4445fd9bdd0d7fa9ebc2be">
            </Iframe>

            <Link to="/millennium-falcon-blueprint"><MillenniumFalconIcon position='absolute' style={mfIcon} /></Link>
                
            <RebelsSymbol></RebelsSymbol>
        </main>
    )
}

export default MillenniumFalconModel;