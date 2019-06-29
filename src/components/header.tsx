import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface IHeader {
  siteTitle: string
}
const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const ContainDiv = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const H1 = styled.h1`
  margin: 0;
`

const Header = ({ siteTitle = "" }: IHeader) => (
  <StyledHeader>
    <ContainDiv>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </ContainDiv>
  </StyledHeader>
)

export default Header
