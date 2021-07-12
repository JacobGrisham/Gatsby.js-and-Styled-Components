import React from 'react';
import BlueprintLayout from '../components/layouts/BlueprintLayout';
import blueprint from "../assets/star-destroyer/sd-blueprint.png";
import info from "../assets/star-destroyer/sd-info.svg";


const StarDestroyerBlueprint = () => {
    return (
    <BlueprintLayout
        pageTitle="Star Destroyer Blueprint"
        blueprintSrc={blueprint}
        infoSrc={info}
        blueprintAlt="Star Destroyer Blueprint"
        infoAlt="Star Destroyer Info">
    </BlueprintLayout>
    )
}

export default StarDestroyerBlueprint;