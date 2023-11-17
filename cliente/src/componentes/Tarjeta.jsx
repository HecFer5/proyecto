import React from 'react'
import { Card, CardMedia } from '@mui/material'

const Tarjeta = () => {
  return (
    <Card sx={{width:200, alignItems:"center"}}>
    <CardMedia
    component="img"
    image="https://via.placeholder.com/200"
    height= "50"
    alt="descripcion"
    pt="297"
    
    />
   </Card>
  )
}

export default Tarjeta