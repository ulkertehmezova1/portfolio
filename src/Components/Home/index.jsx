import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css'

const Home = () => {
  return (
    // <div className="rightpart">
			// <div className="rightpart_in">
    <div id="home" className="tokyo_tm_section animated">
    <div className="container">
        <div className="tokyo_tm_home">
            <div className="home_content">
                <div className="avatar">
                    <div className="image avatar_img" style={
   {
      backgroundImage: `url(${require("./avatart.jpg")})`,      
   }
}><img /></div>
                </div>
                <div className="details">
                    <h3 className="name">Ulkar Tahmazova</h3>
                    <p className="job">Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                    <div className="social">
                        <ul>
                            <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
                            <li><a href="https://twitter.com/"><TwitterIcon /></a></li>
                            <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                            <li><a href="https://www.linkedin.com/feed/"><LinkedInIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
// </div>
// </div>

  )
}

export default Home