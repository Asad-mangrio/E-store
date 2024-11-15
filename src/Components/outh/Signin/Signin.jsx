import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
    const [showpassword,setshowpassword]=useState(false)
  return (
  <Box className="container ">
<Box className="my-4">
<Typography variant='h4'> Sign in to FreshCart</Typography>
<Typography variant="body2"> Welcome back to FreshCart! Enter your email to get started.</Typography>

</Box>
<Box>
<Box><TextField fullWidth type='email' placeholder='Email'/></Box>
<Box><TextField className='my-4' fullWidth type={showpassword?"text":"password"}
 slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="start" onClick={()=> setshowpassword(!showpassword)}>
          <VisibilityIcon />
        </InputAdornment>
      ),
    },
  }} placeholder='Password'/></Box>
<Box className="mt-4"> <Button variant='contained'> Sign in</Button> </Box>


<Typography variant='body1'> Don’t have an account?<Link to="/Signup">  Sign Up</Link></Typography>
</Box>


    
  </Box>
  )
}

export default Signin