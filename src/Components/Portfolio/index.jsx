import React, { useCallback, useEffect, useRef } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid } from '@mui/material'
import './style.css'
import { Link } from 'react-router-dom';
import { WindowOutlined } from '@mui/icons-material';

const Portfolio = () => {
const tooltipRef=useRef(null);


  // window.onmousemove=function(e){
  //   var x=e.target.clientX;
  //   var y=e.target.clientY;
  //   tooltipRef.current.style.top=(y+20) + 'px'
  //   tooltipRef.current.style.left=(x+20) + 'px'
  //   }


  return (
    <div className='container-port'>
      <Grid container rowGap={4}>

        <Grid item xs={12}>
        <button className='port-btn'>Portfolio</button>
        </Grid>
        <Grid item xs={12}>
        <h3 className='port-name'>Creative Portfolio</h3>
        </Grid>
      
     
  <Grid item xs={6}> 
  <div className='box'>
   <a href='https://imaginative-capybara-368049.netlify.app/' target={"_blank"}>
    <Card sx={{ maxWidth: '425px', height:"416px" }}>
      <CardMedia
        component="img"
        height="416"
        image={require("./img/advice-generator.png")}
      />   
    </Card>
    </a>
  
    <div className='tooltip' ref={tooltipRef}><h3>Advice Generator</h3></div>
    </div>
    </Grid>
    
          
<Grid item xs={6}>  
<div className='box'>
  <a href="https://dulcet-figolla-214440.netlify.app/" target={'_blank'}>
<Card sx={{ maxWidth: '425px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/ecommerce-react-min.jpg")}
      />   
    </Card>
    </a>
    <div className='tooltip' ref={tooltipRef}><h3>Shopping Card</h3></div>
    </div>
    </Grid>


    <Grid item xs={6} marginBottom="30px">
      <div className='box'>
        <a href='https://6329dba83281f94c23cef87e--heartfelt-chimera-526663.netlify.app/' target={'_blank'}>
    <Card sx={{ maxWidth: '420px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/todo.png")}
      />   
    </Card>
    </a>
    <div className='tooltip' ref={tooltipRef}><h3>Todo App</h3></div>
    </div>
    </Grid>
   
          
          <Grid item xs={6}>   
          <a href="http://10.30.1.211:30000/thirdScreen" target={'_blank'}>
          <Card sx={{ maxWidth: '420px', height:"416px" }}>
          
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/logo.jpg")}
      />   
    </Card>
    </a>
    </Grid>
    
           
    </Grid>
    
    </div>
  )
}

export default Portfolio