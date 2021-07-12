import * as React from 'react'
import { IconMixin, PathMixin } from '../../styled-components/mixins';
import styled from 'styled-components';

const Icon = styled.svg `
  ${IconMixin}
`;

const Path = styled.path `
  ${PathMixin}
`;

const StarDestroyerIcon = ({component, position}) => {
  return (
    <Icon component={component} position={position} xmlns="http://www.w3.org/2000/svg" width="63" height="32" viewBox="0 0 63.594 32.893">
    <g id="noun_Star_Destroyer_994294" data-name="noun_Star Destroyer_994294" transform="translate(-1.5 -8.5)">
      <g id="Group_11" data-name="Group 11" transform="translate(1.5 8.5)">
        <g id="Group_10" data-name="Group 10">
          <Path component={component} id="Path_12" stroke="#FFFFFF" data-name="Path 12" d="M64,28.455l-11.842-.877-2.631-5.263a1.175,1.175,0,0,0-.877-.658H44.919l-1.974-3.728a1.175,1.175,0,0,0-.877-.658H36.586v-.219l5.921-1.974a1.206,1.206,0,0,0,.658-1.1V11.789A3.373,3.373,0,0,0,39.875,8.5a3.1,3.1,0,0,0-3.07,2.193H29.788A3.3,3.3,0,0,0,26.718,8.5a3.373,3.373,0,0,0-3.289,3.289v2.193a1.206,1.206,0,0,0,.658,1.1l5.921,1.974v.219H24.525c-.439,0-.877.219-.877.658l-1.974,3.728H17.947c-.439,0-.877.219-.877.658l-2.631,5.044L2.6,28.236a1.036,1.036,0,0,0-1.1,1.1v2.193a1.119,1.119,0,0,0,.877,1.1l30.7,8.772h.439l30.7-8.772a1.457,1.457,0,0,0,.877-1.1V29.552A1.036,1.036,0,0,0,64,28.455ZM31.542,15.079l-5.921-1.974V11.789a1.1,1.1,0,1,1,2.193,0,1.036,1.036,0,0,0,1.1,1.1h8.772a1.036,1.036,0,0,0,1.1-1.1,1.1,1.1,0,0,1,2.193,0v1.316l-5.921,1.974a1.206,1.206,0,0,0-.658,1.1v1.1H32.2v-1.1A1.206,1.206,0,0,0,31.542,15.079ZM18.6,23.85h3.728c.439,0,.877-.219.877-.658l1.974-3.728H41.41l1.974,3.728a1.175,1.175,0,0,0,.877.658h3.728l1.754,3.509L33.3,26.043l-16.447,1.1Zm44.3,6.8L33.3,39.2l-29.6-8.552V30.21l29.6-2.193,29.6,2.631Z" transform="translate(-1.5 -8.5)"/>
        </g>
      </g>
    </g>
  </Icon>
  )
}

export default StarDestroyerIcon;