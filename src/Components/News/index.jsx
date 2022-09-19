import { Grid } from '@mui/material'
import React from 'react'
import './style.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 425, height:"416px"}}>
      <CardMedia
        component="img"
        height="200"
        image={require('./img/react-key.png')}
        alt="react"
      />
      <CardContent>
      <h3>"Key" nədir və onu element massivlərində istifadə etməyin faydası nədir?</h3>
      </CardContent>
      <CardActions>
      <button className='news-btn'>Read More</button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 425, height:"416px"}}>
      <CardMedia
        component="img"
        height="200"
        image={require('./img/virtual-dom.jpeg')}
        alt="react"
      />
      <CardContent>
      <h3> React-da Virtual DOM nədir? Real DOM vs Virtual DOM</h3>
      </CardContent>
      <CardActions>
      <button className='news-btn'>Read More</button>

      </CardActions>
    </Card>
        </Grid>
<Grid item xs={6}>
<Card sx={{ maxWidth: 425, height:"416px"}}>
      <CardMedia
        component="img"
        height="200"
        image={require('./img/ui-ux.jpg')}
        alt="react"
      />
      <CardContent>
      <h3>UX/UI dizayn: Dizayn düşüncəsi(Design Thinking)</h3>
      </CardContent>
      <CardActions>
      <button className='news-btn'>Read More</button>
        
      </CardActions>
    </Card>
</Grid>
<Grid item xs={6}>
<Card sx={{ maxWidth: 425, height:"416px"}}>
      <CardMedia
        component="img"
        height="200"
        image={require('./img/prog.jpg')}
        alt="react"
      />
      <CardContent>
      <h3>Proqramlaşdırmada öyrənmə metodları hansılardır?</h3>
      </CardContent>
      <CardActions>
        <button className='news-btn'>Read More</button>
      </CardActions>
    </Card>
</Grid>
    </Grid>
    </div>
  )
}

export default News