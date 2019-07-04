import React from "react"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

// Shape
// entry: PropTypes.shape({
//   getIn: PropTypes.func,
// }),
// widgetFor: PropTypes.func,

export default AboutPagePreview