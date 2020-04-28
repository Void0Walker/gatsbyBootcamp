import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <h1>This about page</h1>
      <h2>Hey, I am fullstack dev.</h2>
      <p>
        Need a developer? <Link to="/contact">Conact me</Link>
      </p>
    </Layout>
  )
}
