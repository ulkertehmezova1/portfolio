import React from 'react'
import { Modal } from '@mui/material'
import './style.css'



function BasicModal(props) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (

       <Modal
    open={props.open || open}
    onClose={handleClose}
    >
      {props.children}
    </Modal>
   
   
  )
}

export default BasicModal
