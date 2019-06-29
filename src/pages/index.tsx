import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ImageDiv = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageDiv>
      <Image />
    </ImageDiv>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
