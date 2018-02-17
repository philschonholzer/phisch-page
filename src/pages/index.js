import React from 'react'
// import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const HeroCover = styled.div`
  margin-top: 20%;
  color: white;
`

const SubTitle = styled.h3`
  font-weight: 200;
`

const IndexPage = ({ data }) => (
  <HeroCover>
    <BgImg
      sizes={data.backgroundImage.sizes}
      style={{ position: 'absolute', zIndex: -1 }}
    />
    <h1>Philip Schönholzer</h1>
    <SubTitle>Always searching.</SubTitle>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </HeroCover>
)

export default IndexPage

export const query = graphql`
  query HeaderImageQuery {
    backgroundImage: imageSharp(id: { regex: "/background/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
