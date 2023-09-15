import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
//import Link from 'react-router-dom';
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: 'space-around',
      flexDirection: "column",
      alignItems: "center"
  
      
  };

  const Url = "http://restapi.adequateshop.com";

export default function LoginFinal({open, handleClose}) {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userDetails, setUserDetails] = useState(
      {
        email: '',
        password: ''
      }
    );
  
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => {
      setUserDetails({ ...userDetails, email: e.target.value });
      if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
        setEmailError('Please enter a valid email address');
        
      } else {
        setEmailError('');
      }
     
    };
  
    const handlePasswordChange = (e) => {
      setUserDetails({ ...userDetails, password: e.target.value });
      if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
        setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
        
      } else {
        setPasswordError('');
      }
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
           toast.success(`Welcome ${userDetails.email}`);
          navigate("/Users")
        })
          .catch((error) => {
          toast.error(error.message);
          })
    };
          

  return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
    <Box sx={style}>
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Hello Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email Or User Name</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={userDetails.email} onChange={handleEmailChange}
            />
            <div><span className="error">{emailError}</span></div>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              value={userDetails.password} onChange={handlePasswordChange}
            />
            <div> <span className="error">{passwordError}</span></div>
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}>Log in</Button>
          <Typography
            endDecorator={<Link href="/Signup" onClick={handleClose}>Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
          <Link href="/Forgot Password" sx={{ alignSelf: 'center' }} onClick={handleClose}>
          <Typography
            fontSize="sm"
            sx={{ alignSelf: 'center' }}>Forgot Password ?
          </Typography>
          </Link>
        </Sheet>
      </main>
    </CssVarsProvider>
    </Box>
    </Modal>
  );
}