import React from 'react'
// import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div style={{ marginTop: '20%', color: 'white' }}>
    <Img
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}
      sizes={data.backgroundImage.sizes}
    />
    <h1>Philip Schönholzer</h1>
    <h3 style={{ fontWeight: 200 }}>Always searching.</h3>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
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
