import React from 'react'
import Img from "../Acesses/product-img-4.jpg"
import Img2 from "../Acesses/product-img-7.jpg"
import Img3 from "../Acesses/product-img-9.jpg"
import Img4 from "../Acesses/product-img-6.jpg"
import { Box, Card, Rating, Typography } from '@mui/material'



const dummydata =[
  {
    Name:"Kellogg's Original Cereals",
    Img: Img,
    Price:"$32 "
  },
  {
    Name:"Kellogg's Original Cereals",
    Img: Img2,
    Price:"$32 "
  },
  {
    Name:"Kellogg's Original Cereals",
    Img: Img3,
    Price:"$32 "
  },
  {
    Name:"Kellogg's Original Cereals",
    Img: Img4,
    Price:"$32 "
  },
]

export const Productdata = () => {
  return (
   <div className='d-flex gap-5 container mt-5'>

{
  dummydata.map((item, index)=>{
    return(
      <Card className='' key={index}>
          <img src={ item.Img} alt="" />
      <Typography variant='body1'>{item.Name} </Typography>
     
    
      <Typography variant='body2'>{item.Price} </Typography>
      <Rating name="read-only" value={3} readOnly />
      </Card>
    )
  })
}




   </div>
  )
}
