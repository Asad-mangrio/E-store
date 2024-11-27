import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Signin = () => {
  const Signinschema = yup.object({
    email: yup.string().required(),
    Password : yup.string().required(),
  })

  const { control, handleSubmit,formState:{ errors }  }=useForm({
    defaultValues: {
      email: '',
      Password: '',
      },
      resolver: yupResolver(Signinschema)
      })
    const [showpassword,setshowpassword]=useState(false)
  return (
 <form onSubmit={handleSubmit((data)=>{console.log(data);
 })}>
   <Box className="container ">
<Box className="my-4">
<Typography variant='h4'> Sign in to FreshCart</Typography>
<Typography variant="body2"> Welcome back to FreshCart! Enter your email to get started.</Typography>

</Box>
<Box>
<Box>
<Controller
        name=" email"
        control={control}
        render={({ field }) =>(
  <TextField error={errors.email?true:false} {...field} fullWidth type='email' placeholder='Email'/>)}/>
  <Typography className='text-danger'> {errors?.email?.message}</Typography>
  </Box>
<Box>
<Controller
        name=" email"
        control={control}
        render={({ field }) =>(
  <TextField error={errors?.email?true:false} {...field} className='my-4' fullWidth type={showpassword?"text":"password"}
 slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="start" onClick={()=> setshowpassword(!showpassword)}>
          <VisibilityIcon />
        </InputAdornment>
      ),
    },
  }} placeholder='Password'/> )}/> 
  <Typography className='text-danger'> {errors?.Password?.message} </Typography>
  </Box>
<Box className="mt-4"> <Button type='submit' variant='contained'> Sign in</Button> </Box>


<Typography variant='body1'> Don’t have an account?<Link to="/Signup">  Sign Up</Link></Typography>
</Box>


    
  </Box>
 </form>
  )
}

export default Signin