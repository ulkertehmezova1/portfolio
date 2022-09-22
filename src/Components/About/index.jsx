import { Grid } from '@mui/material'
import React from 'react'
import AboutModal from '../Modal/AboutModal'
import './style.css'

const About = () => {
  return (
               <div className='about-section'>
				<Grid container >
			    <Grid item xs={12}>
				<img src={require("./about.png")} alt="" width="820px"/>
				</Grid>
				<Grid item xs={12}>
				<h3 className='name-about'>Ulkar Tahmazova & Developer</h3>
				</Grid>
				<Grid item xs={12}>
					<Grid container  columnSpacing={3}>
						<Grid item xs={12} md={6} lg={6}>
						<p className='self-about'>Hello, my name is Ulkar. I am a junior front-end developer based in Baku and happy to code everything.</p>
				{/* <button className='rm-btn'>Read More</button> */}
				<AboutModal />
						</Grid>
						
						<Grid item xs={12} md={6} lg={6}>
	<div className='right'>
				<ul>
					<li>
						<p>
							<span>{"BirthDay:" + " "}</span>
							13.02.2001
						</p>
					</li>
					<li>
						<p>
							<span>{"Age:" + " "}</span>
							21
						</p>
					</li>
					<li>
						<p>
							<span>{"Adress:" + " "}</span>
							Baku, Azerbaijan
						</p>
					</li>
					<li>
						<p>
							<span>{"Email:" + " "}</span>
							ulkrthmzova@gmail.com
						</p>
					</li>
					<li>
						<p>
							<span>{"Phone: "+ " "}</span>
							055 417 10 57
						</p>
					</li>
					<li>
						<p>
							<span>{"Study:" + " "}</span>
							Baku State University
						</p>
					</li>
					<li>
						<p>
							<span>{"Freelance: " + " "}</span>
							Available
						</p>
					</li>
				</ul>
				</div></Grid>
					</Grid>
				
				</Grid>
			

				
				</Grid>
				</div>
    
  )
}

export default About