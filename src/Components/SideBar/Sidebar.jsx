import React from 'react'
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedIcon from '@mui/icons-material/Feed';
import { NavLink, Link } from 'react-router-dom';
import { bottomnav } from '../../data/data';


const Sidebar = () => {
  return (
    <>
<div className='top-navbar'>
<a href="#"><img src={require("./dark.png")} alt="" /> </a>
</div>


<div className='sidebar-container'>
<div className='sidebar'>
<div className="logo">
		<a href="#">	<img src={require("./dark.png")} alt="" /> </a>
				</div>
  <div className="menu">
<ul>
  <li>
    <HomeIcon />
    <span><NavLink end activeClassName='active' className="nav-bar-link" to="/">
   Home
</NavLink></span>
  </li>
  <li>
    <PersonIcon />
    <span><NavLink to="/about" className="nav-bar-link">About</NavLink></span>
  </li>
  <li>
    <BusinessCenterIcon />
    <span><NavLink to="/portfolio" className="nav-bar-link">Portfolio</NavLink></span>
    </li>
  <li>
    <FeedIcon />
  <span><NavLink to="/news" className="nav-bar-link">News</NavLink></span>
  </li>
  <li>
    <MailOutlineIcon />
   <span><NavLink to='/contact' className="nav-bar-link">Contact</NavLink></span>
   </li>
</ul>
</div>
<div className="copyright">
					<p>&copy; 2022 Ulker
             <br />
           Created by 
           <a href="#">{" "+ 'Ulker'}</a>
            </p>
				</div>
</div>
</div>

<div className='footer-navbar'>
{
  bottomnav.map((nav)=>(
<a><NavLink end to={`${nav.route}`} className='nav-bar-link'>{nav.section}</NavLink></a>
  ))
}
</div>
</>
  )
}

export default Sidebar