import React from "react"
import { Link } from "gatsby"
// React Icons:
import { AiOutlineMenu } from "react-icons/ai"

// Main:
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Tomas Padilla</div>
        <div className="menu-sidebar-open-btn" onClick={toggleSidebar}>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
        {/* Navbar Desktop */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
