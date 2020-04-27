import React from "react"
import Layout from "../components/layout"

export default function contactPage() {
  return (
    <Layout>
      <h1>Contact page</h1>
      <p>My number: +420 720 034 454</p>
      <p>
        Checkout my facebook{" "}
        <a
          href="https://www.facebook.com/Baltic.tiger"
          target="_blank"
          rel="noopener noreferrer"
        >
          profile
        </a>
      </p>
    </Layout>
  )
}
