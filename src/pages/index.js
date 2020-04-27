import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ color: "blue" }}>The Great Gatsby Bootcamp</h1>
      <h2>I'm Arturas</h2>
      <p>
        Need a developer? <Link to="/contact">Conact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
