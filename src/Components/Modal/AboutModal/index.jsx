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
  <BasicModal open={open}>
  <div className='container' sx={{display:'flex'}}>
  <div className="div-addabout">
          <button onClick={handleClose} style={{all:'unset'}}><HighlightOffIcon /></button>
          </div>
    <Box className="style-about">
<Grid container justifyContent={'space-between'}>
  <Grid item >
          <div className="soft-skilss">
            <h3 className='skill-header'>Software Skills</h3>
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
<Grid item >
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
<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
</Grid>
   </Grid>
    </Box>
    </div>
  </BasicModal>
  </>
  )
}

export default AboutModal