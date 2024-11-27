import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Img from "../Acesses/product-img-4.jpg"
import Img2 from "../Acesses/product-img-7.jpg"
import Img3 from "../Acesses/product-img-9.jpg"
import Img4 from "../Acesses/product-img-6.jpg"
import { Card, Rating,  } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ButtonAppBar() {
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const [Products,setProducts]=React.useState([])
 console.log(Products);
 
  React.useEffect(()=>{

    const Productdata=axios.get("https://api.escuelajs.co/api/v1/products").then((data)=>{setProducts(data.data);
    })
  },[])
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          E-Store
       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
         <Typography>Home</Typography>
         <Typography className='mx-3'>About</Typography>
         <Typography>Contact</Typography>
         
         <Button className='text-white'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}><Link to="/signin"> My account</Link> </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
       
      </AppBar>
    </Box>
     <div className='d-flex gap-5 container mt-5'>

     {
       Products.map((item)=>{
         return(
           <div className='d-flex'>
          <Card >
          <Box >
 <img className='d-flex align-items-center p-3 object-fit-cover ' style={{width:"180px", minHeight:"100px",maxHeight:"180px"}} src={item.images [0]} alt="" />
 <Rating className='ms-4' name="read-only" value={3} readOnly />
 <Typography className='text-center' variant='body1'>{item. title} </Typography>
 <Typography className='text-center' variant='body2'>{item. Price} </Typography>
 
           </Box>
           </Card>
           </div>
         )
        })
     }
     
  

     
     
        </div>
        </>
  );
}
