import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material'
import './style.css'

const Portfolio = () => {
  return (
    <div className='container-port'>
      <Grid container rowGap={4}>

        <Grid item xs={12}>
        <button className='port-btn'>Portfolio</button>
        </Grid>
        <Grid item xs={12}>
        <h3 className='port-name'>Creative Portfolio</h3>
        </Grid>
      
     
  <Grid item xs={6}>  <Card sx={{ maxWidth: '425px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/advice-generator.png")}
      />   
    </Card></Grid>
    
          
<Grid item xs={6}>  
<Card sx={{ maxWidth: '425px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/ecommerce-react-min.jpg")}
      />   
    </Card></Grid>


    <Grid item xs={6} marginBottom="30px">
    <Card sx={{ maxWidth: '420px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/todo.png")}
      />   
    </Card>
    </Grid>
   
          
          <Grid item xs={6}>   <Card sx={{ maxWidth: '420px', height:"416px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="416"
        image={require("./img/weatherapp3.jpg")}
      />   
    </Card></Grid>
    
           
    </Grid>
    
    </div>
  )
}

export default Portfolio