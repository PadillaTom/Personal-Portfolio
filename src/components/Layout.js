import React, { useState } from "react"
// Components:
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout({ children }) {
  // States:
  const [isOpen, setIsOpen] = useState(false)
  // Toggle Sidebar:
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
      {children}
    </React.Fragment>
  )
}

export default Layout
