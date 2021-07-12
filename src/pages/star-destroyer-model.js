import React from 'react'
import ModelLayout from '../components/layouts/ModelLayout';
import Iframe from '../components/Iframe';
import EmpireSymbol from "../components/GalacticSymbols/EmpireSymbol";
import StarshipTitle from '../components/StarshipTitle';
import StarDestroyerIcon from "../components/StarshipIcons/StarDestroyerIcon";
import { Link } from 'gatsby'

const StarDestroyerModel = () => {
    return (
        <main>
            <ModelLayout
                pageTitle="Star Destroyer 3D Model"
                manufacturer="Kuat Drive Yards"
                model="Imperial I-class Star Destroyer"
                starshipclass="Star Destroyer">
            </ModelLayout>

            <StarshipTitle
                starship="Star Destroyer"
                play='sd'>
            </StarshipTitle>

            <Iframe
                iframeTitle="Star Wars Star Destroyer 3D Model"
                videoSrc="3f4e57f9f7b04df9b2dcf9132b253742">
            </Iframe>

            <Link to="/star-destroyer-blueprint"><StarDestroyerIcon position='absolute' /></Link>

            <EmpireSymbol></EmpireSymbol>
        </main>
    )
}

export default StarDestroyerModel;