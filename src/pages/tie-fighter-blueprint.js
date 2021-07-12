import React from 'react';
import BlueprintLayout from '../components/layouts/BlueprintLayout'
import blueprint from "../assets/tie-fighter/tf-blueprint.svg";
import info from "../assets/tie-fighter/tf-info.svg";

const TieFighterBlueprint = () => {
    return (
        <BlueprintLayout
            pageTitle="Tie Fighter Blueprint"
            blueprintSrc={blueprint}
            infoSrc={info}
            blueprintAlt="Tie Fighter Blueprint"
            infoAlt="Tie Fighter Info">
        </BlueprintLayout>
    )
}

export default TieFighterBlueprint;