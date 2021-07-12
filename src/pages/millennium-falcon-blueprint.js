import React from 'react';
import BlueprintLayout from '../components/layouts/BlueprintLayout';
import blueprint from "../assets/millennium-falcon/mf-blueprint.svg";
import info from "../assets/millennium-falcon/mf-info.svg";


const MillenniumFalconBlueprint = () => {
    return (
    <BlueprintLayout
        pageTitle="Millennium Falcon Blueprint"
        blueprintSrc={blueprint}
        infoSrc={info}
        blueprintAlt="Millenium Falcon Blueprint"
        infoAlt="Millenium Falcon Info">
    </BlueprintLayout>
    )
}

export default MillenniumFalconBlueprint;