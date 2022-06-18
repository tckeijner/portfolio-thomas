import {Link} from "react-router-dom";
import React from "react";
import '../styles/styles.scss'

export default function NavBar() {
  return (
    <div>
      <ul className='navBar'>
        <div className='nameLabel'>Thomas Keijner</div>
        <div className='navLinks'>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </div>
        <div className='portfolioLabel'>Portfolio</div>
      </ul>
    </div>
  )
}