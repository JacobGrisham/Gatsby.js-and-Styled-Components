import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import GlobalStyle from '../styled-components/theme';
import { StaticImage } from "gatsby-plugin-image"
import Footer from '../components/Footer'

// 1.) Tried styling StaticImage Gatsby component with Styled-Components
// e.g. const Title = styled(StaticImage)`position: absolute; marginLeft: auto;`
// However, the StaticImage component does not support higher-order components,
// which includes the styled function from libraries such as Emotion and styled-components.
// Source: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
// 2.) Tried using the StaticImage props avaiable per the documentation above
// However, there aren't enough props to position the images like I want
// 3.) Tried using object storage for Title and Crosshair CSS properties linked under className and imgClassName
// e.g. const Title = {position: "absolute", marginLeft: "auto"}
// However, found that I was fighting against the CSS properties inherent in the StaticImage component
// Ultimately decided to wrap the StaticImage Gatsby component in a Styled-Components component
// It's not very clean, but it's the best solution at this point

const Title = styled.div `{
    position: absolute;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media only screen and (max-width: 500px){
        height: auto;
        width: 9rem;
    }
}
`;

const Subtitle = styled.h2` {
    position: absolute;
    margin: 0 auto;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    letter-spacing: 20px;
    text-transform: uppercase;
    text-align: center;
    color: white;

    @media only screen and (max-width: 1000px) {
        font-size: 1rem;
        letter-spacing: 10px;
    }

    @media only screen and (max-width: 500px){
        font-size: 0.5rem;
        letter-spacing: 3px;
    }
}
`;

const Crosshair = styled.div `{
    position: absolute;
    text-align: center;
    margin: 0 auto;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 25rem;
    height: auto;

    @media only screen and (max-width: 500px){
        height: auto;
        width: 18rem;
    }
}
`;

const Video = styled.video` {
    width: 100vw;
    height: auto;
}
`;

const DeathStar = () => {

    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "death-star/video/hero-desktop.mp4"}) {
            publicURL
        }
    }
    `)

    return(
        <main>
            <GlobalStyle />

            <Title>
                <StaticImage
                    src="../assets/death-star/star-wars.svg"
                    alt="Star Wars"
                    loading="eager"
                />
            </Title>

            <Subtitle>3D Models & Blueprints</Subtitle>

            <Crosshair>
                <StaticImage
                    src="../assets/death-star/home.svg"
                    alt="crosshairs" 
                    loading="eager"
                    />
            </Crosshair>

            <Video muted autoPlay loop>
                <source src={data.file.publicURL}
                type="video/mp4"></source>
            </Video>

            <Footer />
        </main>
    )
}

export default DeathStar;