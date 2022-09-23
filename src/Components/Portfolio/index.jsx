import React, { useCallback, useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid } from '@mui/material'
import { data } from '../../data/data';
import './style.css'

const Portfolio = () => {
const tooltipRef=useRef(null);
 
// const [state, setState]=useState();
  // const onMouve=(e)=>{
  //   var x=e.clientX;
  //   var y=e.clientY;
  //   tooltipRef.current.style.top=(y+20) + 'px'
  //   tooltipRef.current.style.left=(x+20) + 'px'
  //   }
 
  // const onMouseMove=(e)=>{
  //   setState(tooltipRef.current)
  //   let x=e.clientX;
  //   let y=e.clientY;
  //   state.style.top=(y+20) + 'px';
  //   state.style.left=(x +20)+ 'px';
  //   console.log(state)
  // }

  return (
    <div className='container-port'>
      <Grid container rowGap={4}>

        <Grid item xs={12}>
        <button className='port-btn'>Portfolio</button>
        </Grid>
        <Grid item xs={12}>
        <h3 className='port-name'>Creative Portfolio</h3>
        </Grid>
      

   {
    data.map((port)=>(
      <Grid item sm={12} md={6} lg={6} > 
      <div className='box'>
       <a href={port.path} target={"_blank"}>
        <Card sx={{ maxWidth: '396px', height:"416px" }}>
          <CardMedia
            component="img"
            height="416"
            image={require(`./img/${port.img}`)}
          />   
        </Card>
        </a>
      
        <div className='tooltip'><h3>{port.name}</h3></div>
        </div>
        </Grid>
    ))
   } 
    </Grid>
    </div>
  )
}

export default Portfolio