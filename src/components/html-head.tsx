import React from "react"
import Helmet from "react-helmet"

const HtmlHead = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Helmet>
  )
}

export default HtmlHead
