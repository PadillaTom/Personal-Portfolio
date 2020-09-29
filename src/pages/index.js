import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// Components:
import Layout from "../components/Layout"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "fondo3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// Image Query

// Main:
export default function Home() {
  // Return:
  return <Layout></Layout>
}
