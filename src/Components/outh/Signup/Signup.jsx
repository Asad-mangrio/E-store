import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useForm, Controller, SubmitHandler } from "react-hook-form"

import React, { useState } from 'react'
import { Form } from 'react-router-dom';
import { Email, Password } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Signup = () => {
  const Signupschema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    Email: yup.string().required(),
    Password: yup.string().required(),
  })

  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    Email:"",
    Password:"",
    },
    resolver: yupResolver(Signupschema)
  })
    const [showpassword, setshowpassword]=useState(false)
  return (
 <form onSubmit={handleSubmit((data)=>{console.log(data);
 })}>
     <Box className="container ">
    <Box>
    <Typography variant='h4'> Get Start Shopping</Typography>
    <Typography className='mb-4' variant="body2"> Welcome to FreshCart! Enter your email to get started.</Typography>
    
    </Box>
    <Box>
    <Box>
    <Controller
        name="firstName"
        control={control}
        render={({ field }) =>( 
      <TextField error={errors.firstName?true:false}  {...field} fullWidth type='email' placeholder='first Name'/>)}/>
      <Typography className='text-danger' variant='body1'> {errors?.firstName?.message}</Typography>
      </Box>
    <Box>
    <Controller
        name="lastName"
        control={control}
        render={({ field }) =>(
      <TextField error={errors.lastName?true:false} {...field} className='my-4' fullWidth type='text' placeholder='lastName'/>)}/>
      <Typography className='text-danger' variant='body1'> {errors?.lastName?.message}</Typography>
      </Box>
    <Box>
    <Controller
        name="Email"
        control={control}
        render={({ field }) => (
      <TextField error={errors.Email?true:false} {...field} className='my-4' fullWidth type="email" placeholder='Email'/>)}/>
      <Typography className='text-danger' variant='body1'> {errors?.Email?.message}</Typography>
      </Box>
    <Box>
    <Controller
        name="Email"
        control={control}
        render={({ field }) => (
      <TextField error={errors.Password?true:false} className='my-4' fullWidth type={ showpassword ? "text" :"password"}   slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=> setshowpassword(!showpassword)}>
                <RemoveRedEyeIcon />
              </InputAdornment>
            ),
          },
        }} placeholder='Password'/>)}/>
        <Typography className='text-danger' variant='body1'> {errors?.Password?.message}</Typography>
        </Box>
    <Box className="mt-4"> <Button type='submit' variant='contained'> Register</Button> </Box>
    
    
    
    </Box>
    
    
        
      </Box>
 </form>
  )
}

export default Signup