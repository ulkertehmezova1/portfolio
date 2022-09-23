import { Grid } from '@mui/material'
import React from 'react'
import AboutModal from '../Modal/AboutModal'
import './style.css'
import { about } from '../../data/data'

const About = () => {
  return (
               <div className='about-section'>
				<Grid container >
			    <Grid item xs={12}>
				<img src={require("./about.png")} alt=""  className='img-about'/>
				</Grid>
				<Grid item xs={12}>
				<h3 className='name-about'>Ulkar Tahmazova & Developer</h3>
				</Grid>
				<Grid item xs={12}>
					<Grid container  columnSpacing={3}>
						<Grid item xs={12} md={6} lg={6}>
						<p className='self-about'>Hello, my name is Ulkar. I am a junior front-end developer based in Baku and happy to code everything.</p>
				<AboutModal />
						</Grid>
						
						<Grid item xs={12} md={6} lg={6}>
	<div className='right'>
				<ul>

				{
					about.map((ab)=>(
						<li>
						<p>
							<span>{ab.name}</span>
							{ab.value}
						</p>
					</li>
					))
				}

				</ul>
				</div></Grid>
					</Grid>
				
				</Grid>
			

				
				</Grid>
				</div>
    
  )
}

export default About