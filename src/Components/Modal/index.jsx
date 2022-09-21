import React from 'react'
import { Modal } from '@mui/material'
import './style.css'



function BasicModal(props) {


  return (

       <Modal
    open={props.open}
    onClose={props.handleClose}
    >
      {props.children}
    </Modal>
   
   
  )
}

export default BasicModal
