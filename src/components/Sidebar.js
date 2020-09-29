import React from "react"
import { Link } from "gatsby"

// React Icons
import { ImLinkedin2 } from "react-icons/im"
import { FiGithub } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"

// Main:
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Sidebar Functionality:
  //   const isOpen = false // In Layout

  // Return:
  return (
    <React.Fragment>
      <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-close-btn">
          <AiOutlineClose onClick={toggleSidebar}></AiOutlineClose>
        </div>
        <ul className="sidebar-links">
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
        <div className="sidebar-social-icons">
          <ImLinkedin2></ImLinkedin2>
          <FiGithub></FiGithub>
          <SiGmail></SiGmail>
          <MdPhoneIphone></MdPhoneIphone>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Sidebar
