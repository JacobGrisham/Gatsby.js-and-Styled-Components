# [Star Wars 3D Models & Blueprints: Front End Web App using Flask](https://star-wars-3d-models-blueprints.herokuapp.com/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/38341d620d9b4105aeb417424d312475)](https://www.codacy.com/gh/JacobGrisham/Star-Wars-Front-End-Web-App-using-Flask/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Star-Wars-Front-End-Web-App-using-Flask&amp;utm_campaign=Badge_Grade)
### Homework from [Harvard's Introduction to Computer Science CS50 hosted on eDX](https://www.edx.org/course/cs50s-introduction-to-computer-science)
### 🎓 [Web Track](https://cs50.harvard.edu/x/2020/tracks/web/)
- [Homepage](https://cs50.harvard.edu/x/2020/tracks/web/homepage/): Tasked to build a simple homepage using HTML, CSS, and JavaScript. I took this as an opportunity to go beyond this by practicing design and using advanced CSS mehtods. Later refactored website with [Gatsby.js](https://www.gatsbyjs.com/) and [Styled Components](https://styled-components.com/).

## 💡Lessons Learned
- Prototyping in AdobeXD
- Building Front-End from Design Specs
- SVG code in-line within HTML (and when to use src file reference instead)
- SVG in place of heavy CSS
- Advanced CSS properties
- Styled Components
- Git branch management
- (Deprecated) Deploying a Flask application on Heroku

## 🛠 Technologies
|Front-End    |Deployment|
| ----------- | -------- |
|React	      |Netlify   |
|Gatsby   		|.         |
|ES6          |.         |

## ⚖️ Methodology
- Initially built this website with a backend server using the Python framework, Flask, which was primarily used for its templating capabilities. The website was hosted on the [free tier plan on Heroku](https://devcenter.heroku.com/articles/free-dyno-hours), alongside two other websites using the free tier plan. The main problem with this approach was that it was both heavy and expensive. It was heavy in that Flask wasn't strictly neccessary to achieve templating. It was expensive in that the free tier plan on Heroku put the app to sleep after 30 minutes. Furthermore, the free dyno minutes would often expire by the 24th of each month, which effectively took down the website until the start of the next month. Therefore, after learning about React and the [Jamstack](https://jamstack.org/), I put the two together and refactored this application by migrating from a server-based architecture with Flask to a static website architecture with [Gatsby.js](https://www.gatsbyjs.com/), and by switching cloud-hosting providers from Heroku to Netlify. The code is more simple, DRY, and modular with React. The website has better performance when loading pages with Gatsby.
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