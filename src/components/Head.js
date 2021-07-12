import React from "react"
import { Helmet } from "react-helmet"

const Head = ({pageTitle}) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      
      <title>{pageTitle}</title>

      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap" rel="stylesheet" />
      <link href="//db.onlinewebfonts.com/c/c2ff4837879a9b9bbca094b63bdb01c0?family=Aurebesh+AF" rel="stylesheet" type="text/css"/>
    </Helmet>
  )
}

export default Head;