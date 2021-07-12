# [Star Wars 3D Models & Blueprints: Front End Web App using Gatsby.js and Styled Components](https://starwars-spaceships.netlify.app/)
- Refactored website from [Flask](https://flask.palletsprojects.com/en/2.0.x/) to with [Gatsby.js](https://www.gatsbyjs.com/) and [Styled Components](https://styled-components.com/).
- [Originally homework from CS50](https://cs50.harvard.edu/x/2020/tracks/web/homepage/), where we were tasked to build a simple homepage using HTML, CSS, and JavaScript. I took this as an opportunity to go beyond this by practicing design and using advanced CSS methods.
- The first version of the website built was Flask is archived is this repo: [Star-Wars-Front-End-Web-App-using-Flask](https://github.com/JacobGrisham/Star-Wars-Front-End-Web-App-using-Flask).

## 💡Lessons Learned
During Refactor
- [Gatsby.js](https://www.gatsbyjs.com/)
  - [Portal for Navbar](https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/)
  - `StaticImage` from [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
- [Styled Components](https://styled-components.com/)
  - [extending styles](https://styled-components.com/docs/basics#extending-styles)
  - [props](https://styled-components.com/docs/basics#passed-props)
  - [referencing other components](https://styled-components.com/docs/advanced#referring-to-other-components)
- [GraphQL](https://www.gatsbyjs.com/docs/graphql/)

Before Refactor
- Prototyping in AdobeXD
- Building Front-End from Design Specs
- SVG in place of heavy CSS
- Advanced CSS properties
- Git branch management

## 🛠 Technologies
|Front-End        |Deployment|
| --------------- | -------- |
|React	          |Netlify   |
|Gatsby   		    |.         |
|ES6              |.         |
|Styled-Components|.         |
|GraphQL          |.         |

## ⚖️ Methodology
- Initially built this website with a backend server using the Python framework, [Flask](https://flask.palletsprojects.com/en/2.0.x/), which was primarily used for its templating capabilities offered by [Jinja 2.0](https://jinja.palletsprojects.com/en/3.0.x/). The website was hosted on the [free tier plan on Heroku](https://devcenter.heroku.com/articles/free-dyno-hours), alongside two other websites using the free tier plan. The main problem with this approach was that it was both heavy and expensive. It was heavy in that Flask wasn't strictly neccessary to achieve templating. It was expensive in that the free tier plan on Heroku put the app to sleep after 30 minutes. Furthermore, the free dyno minutes would often expire by the 24th of each month, which effectively took down the website until the start of the next month. Therefore, after learning about React and the [Jamstack](https://jamstack.org/), I put the two together and refactored this application by migrating from a server-based architecture with Flask to a static website architecture with [Gatsby.js](https://www.gatsbyjs.com/), and by switching cloud-hosting providers from Heroku to Netlify. The code is more simple, DRY, and modular with React. The website has better performance when loading pages with Gatsby and even supports offline capability with Progressive Web App service workers.
- Refactored plain CSS with [Styled Components](https://styled-components.com/) as a CSS alternative for better code organization, to practice working with CSS-in-JS, and to practice working with a new technology by only reading documentaton. Furthermore, Styled Components are the combination of the element and the rules that style it, so it's also less verbose than something like CSSModules.
- Created prototype in AdobeXD to prevent wasted engineering time, to practice UX/UI design, and to practice building from a UX/UI design specification.
- Protoyped website with a Mobile-first design as practice for implementing the industry-standard principle.
- Heavily relied on open-source assests to make use of the high quality material created or curated by the open-source community.

## 🚀 Getting Started
To run this project locally:
- In your terminal, navigate to the root project directory and run the following commands
- To install the dependencies
```
npm install
```
- To start the website
```
npm run dev
```

## 📣 Acknowledgments
- Star Wars created by Lucasfilm Ltd.
- Starship information from [Star Wars API](https://swapi.dev/)
- Aurebesh Font from [Online Web Fonts](https://www.onlinewebfonts.com/download/ad4908c2b00349b5ccefeb6be87ce49c)
- Sound Effects from [Find Sounds](https://www.findsounds.com/ISAPI/search.dll?start=21&keywords=Star%20Wars&seed=40)
- Starship 3D Models created by YamahaDrummer2017 from [SketchFab](https://sketchfab.com/yamahadrummer2017)
- Favicon Death Star created by Henning Gross from [the Noun Project](https://thenounproject.com/search/?q=death+star&i=1007126)
- 404 R2D2 created by Simon Child from [the Noun Project](https://thenounproject.com/search/?q=droid+star+wars&i=367715)
- Tie Fighter created by Linker from [the Noun Project](https://thenounproject.com/search/?q=tie+fighter&i=2202280)
- Star Destroyer ceated by Henning Gross from [the Noun Project](https://thenounproject.com/search/?q=star+destroyer&i=994294)
- Navigation Death Star created by Ben David from [the Noun Project](https://thenounproject.com/search/?q=death+star&i=1571954)
- Volume Button created by Agarunov Oktay-Abraham from [the Noun Project](https://thenounproject.com/search/?q=volume&i=576880)
- Star Wars Hyperspace Copyright (c) 2021 by [yonatan](https://codepen.io/ybensira/pen/byYNBZ)
- Remaining Star Wars Icons and Logos from Various Sources

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
