import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import React, { useState } from 'react'

const Signup = () => {
    const [showpassword, setshowpassword]=useState(false)
  return (
    <Box className="container ">
    <Box>
    <Typography variant='h4'> Get Start Shopping</Typography>
    <Typography className='mb-4' variant="body2"> Welcome to FreshCart! Enter your email to get started.</Typography>
    
    </Box>
    <Box>
    <Box><TextField fullWidth type='email' placeholder='first Name'/></Box>
    <Box><TextField className='my-4' fullWidth type='password' placeholder='Second Name'/></Box>
    <Box><TextField className='my-4' fullWidth type="email" placeholder='Email'/></Box>
    <Box><TextField className='my-4' fullWidth type={ showpassword ? "text" :"password"}   slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=> setshowpassword(!showpassword)}>
                <RemoveRedEyeIcon />
              </InputAdornment>
            ),
          },
        }} placeholder='Password'/></Box>
    <Box className="mt-4"> <Button variant='contained'> Register</Button> </Box>
    
    
    
    </Box>
    
    
        
      </Box>
  )
}

export default Signup