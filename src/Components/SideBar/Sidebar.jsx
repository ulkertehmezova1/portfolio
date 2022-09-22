import React from 'react'
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedIcon from '@mui/icons-material/Feed';
import { Link } from 'react-router-dom';


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
    <span><Link to="/" style={{all:'unset'}}>Home</Link></span>
  </li>
  <li>
    <PersonIcon />
    <span><Link to="/about" style={{all:'unset'}}>About</Link></span>
  </li>
  <li>
    <BusinessCenterIcon />
    <span><Link to="/portfolio" style={{all:'unset'}}>Portfolio</Link></span>
    </li>
  <li>
    <FeedIcon />
  <span><Link to="/news" style={{all:'unset'}}>News</Link></span>
  </li>
  <li>
    <MailOutlineIcon />
   <span><Link to='/contact'  style={{all:'unset'}}>Contact</Link></span>
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
<a><Link to="/" style={{all:'unset'}}>Home</Link></a>
 <a><Link to ="/about" style={{all:'unset'}}>About</Link></a>
  <a><Link to="/portfolio" style={{all:'unset'}}>Portfolio</Link></a>
 <a><Link to="/news" style={{all:'unset'}}>News</Link></a>
 <a><Link to="/contact" style={{all:'unset'}}>Contact</Link></a>
</div>
</>
  )
}

export default Sidebar