import React from "react"
// Components:
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {children}
    </React.Fragment>
  )
}

export default Layout
