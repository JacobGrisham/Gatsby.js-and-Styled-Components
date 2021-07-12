import React from 'react'
import ModelLayout from '../components/layouts/ModelLayout';
import Iframe from '../components/Iframe';
import EmpireSymbol from "../components/GalacticSymbols/EmpireSymbol";
import StarshipTitle from '../components/StarshipTitle';
import TieFighterIcon from "../components/StarshipIcons/TieFighterIcon";
import { Link } from 'gatsby'

const TieFighterModel = () => {
    return (
        <main>
            <ModelLayout
                pageTitle="Tie Fighter 3D Model"
                manufacturer="Sienar Fleet Systems"
                model="Twin Ion Engine/Ln Starfighter"
                starshipclass="Tie Fighter">
            </ModelLayout>
            
            <StarshipTitle
                starship="Tie Fighter"
                name='tf'>
            </StarshipTitle>

            <Iframe
                iframeTitle="Star Wars Tie Fighter 3D Model"
                videoSrc="1d9ac12f4c4047d0a3b8a0b462637248">
            </Iframe>
            
            <Link to="/tie-fighter-blueprint"><TieFighterIcon position='absolute' /></Link>

            <EmpireSymbol />
        </main>
    )
}

export default TieFighterModel;