import { Link, useLocation } from "react-router-dom";
import React from "react";
import '../styles/styles.scss'
import routes from './navBarContent.json';

export default function NavBar() {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <ul className='navBar'>
        <div className='nameLabel'>Thomas Keijner</div>
        <div className='navLinks'>
          { routes.map((route, index) => (
            <li key={ index } className={ location.pathname === route.path ? 'activeLink' : '' }><Link
              to={ route.path }>{ route.name }</Link></li>
          )) }
          {/*<li><Link to="/bio">Bio</Link></li>*/ }
          {/*<li><Link to="/cv">CV</Link></li>*/ }
          {/*<li><Link to="/projects">Projects</Link></li>*/ }
        </div>
        <div className='portfolioLabel'>Portfolio</div>
      </ul>
    </div>
  )
}