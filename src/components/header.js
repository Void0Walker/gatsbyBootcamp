import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.scss"

export default function Header() {
  return (
    <header
      className={headerStyles.header}
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link className={headerStyles.title} to="/">
          Arturas Kalandarisvili
        </Link>
      </h3>
      <Link to="/" className={headerStyles.link}>
        Main
      </Link>
      <Link to="/contact" className={headerStyles.link}>
        Contact
      </Link>
      <Link to="/blog" className={headerStyles.link}>
        Blog
      </Link>
      <Link to="/about" className={headerStyles.link}>
        About
      </Link>
    </header>
  )
}
