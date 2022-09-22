import React from 'react'
import BasicModal from '..';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import './style.css'
const AboutModal = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <>
 	<button className='rm-btn' onClick={handleOpen}>Read More</button>
  <BasicModal open={open} handleClose={handleClose}>
  <div className='container' sx={{display:'flex'}}>
  <div className="div-addabout">
          <button onClick={handleClose} style={{all:'unset'}}><HighlightOffIcon /></button>
          </div>
    <Box className="style-about">
<Grid container justifyContent={'space-between'} alignContent={'center'}>
  <Grid item md={4} xs={12}>
          <div className="soft-skilss">
            <h3 className='skill-header'>Hard Skills</h3>
          <Typography component="legend">HTML</Typography>
      <Rating name="read-only" value={5} readOnly />
      <Typography component="legend">CSS</Typography>
      <Rating name="read-only" value={5} readOnly />
      <Typography component="legend">JAVSCRIPT</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">TYPESCRIPT</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">REACT</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">REDUX</Typography>
      <Rating name="read-only" value={4} readOnly />
</div>
</Grid>

<Grid item xs={12} md={4} >
          <div className="soft-skilss">
            <h3 className='skill-header'>Soft Skills</h3>
          <Typography component="legend">Good Comumunication</Typography>
      <Rating name="read-only" value={5} readOnly />
      <Typography component="legend">TeamWork</Typography>
      <Rating name="read-only" value={5} readOnly />
      <Typography component="legend">Creativity</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">Problem Solving</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">Willingness to learn</Typography>
      <Rating name="read-only" value={4} readOnly />
</div>
</Grid>

<Grid item xs={12} md={4}>
<div className='lang-skilss'>
  <h3 className='skill-header'>Language Skills</h3>
<Typography component="legend">English</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">Turkish</Typography>
      <Rating name="read-only" value={4} readOnly />
      <Typography component="legend">Russian</Typography>
      <Rating name="read-only" value={3} readOnly />
</div>
</Grid>
<Grid item xs={12}>
<h1 style={{textAlign:'center'}}>About Me</h1>

</Grid>
<Grid item xs={12}>
<p>My name is Ulkar Tahmazova. I'm a Front End Engineer based in Baku ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.

In my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences  🗺"</p>
</Grid>
   </Grid>
    </Box>
    </div>
  </BasicModal>
  </>
  )
}

export default AboutModal