import { Grid } from '@mui/material'
import React from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NewsModal from '../Modal/NewsModal';
import { news } from '../../data/data';


const News = () => {
  return (
    <div className='news-container'>
    <Grid container rowGap={3}>
        <Grid item xs={12}>
        <button className='news'>News</button>
        </Grid>
        <Grid item xs={12}>
        <h3 className='news-header'>Latest News</h3>
        </Grid>

        {
    news.map((net)=>(
      <Grid item xs={12} md={6}>
      <Card sx={{ maxWidth: 425, height:"416px"}}>
    <CardMedia
      component="img"
      height="200"
      image={require(`./img/${net.img}`)}
      alt="react"
    />
    <CardContent>
    <h3>{net.header}</h3>
    </CardContent>
    <CardActions>
<NewsModal>
<Grid container alignContent={'center'}>
          <Grid item xs={12} textAlign={'center'}>
              <h3 className='blog-header'>{net.header}</h3>
              </Grid>
              <Grid item xs={12} textAlign="center">
          <img src={require(`./img/${net.imgModal}`)} className='img-news-mod' />
              </Grid>
             
              <Grid item xs={12}>
<p>{net.paragraph}</p>
</Grid>
</Grid>
</NewsModal>
    </CardActions>
  </Card>
      </Grid>
    ))
   } 

    </Grid>
    </div>
  )
}

export default News