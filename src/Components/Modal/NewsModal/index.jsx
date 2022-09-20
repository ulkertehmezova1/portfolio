import React from 'react'
import BasicModal from '..'
import { Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import './style.css'
const NewsModal = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <div>
        <>
      <button onClick={handleOpen} className='news-btn'>Read More</button>
<BasicModal open={open}>
<div className='container' sx={{display:'flex'}}>
  <div className="div-addnews">
          <button onClick={handleClose} style={{all:'unset'}}><HighlightOffIcon /></button>
          </div>
          <Box className='style-news'>
           {children}
          </Box>
          </div>
</BasicModal>
        </>
    </div>
  )
}

export default NewsModal