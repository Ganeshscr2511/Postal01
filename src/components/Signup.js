import * as React from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Url = "http://restapi.adequateshop.com";

export default function SignUp() {
  const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const[errorpwd,setErrorpwd] =useState('');
    const [userDetails, setUserDetails] = useState(
      {
        email: '',
        password: '',
        confirmPassword:''
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

    const handleConfirmpassword = (e) => {
      setUserDetails({...userDetails, confirmPassword: e.target.value})
      if(userDetails.confirmPassword!=userDetails.password){
        setErrorpwd('Password Does Not Match');
      }
      else{
        setErrorpwd('');
        console.log("password correct");
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
           toast.success(`Welcome ${userDetails.email}`);
          navigate("/Login")
        })
          .catch((error) => {
          toast.error(error.message);
          })
    };


  return (
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
            <Typography level="h4" component="h1" sx={{ alignSelf: 'center' }}>
              <b>Sign Up</b>
            </Typography>
            
          </div>
          <FormControl>
            <FormLabel>Email or User Name</FormLabel>
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
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="Confirm password"
              value={userDetails.confirmPassword}
              onChange={handleConfirmpassword}
            />
            <div> <span className="error">{errorpwd}</span></div>
          </FormControl>
          <Link to="/Login">
          <Button sx={{ mt: 1, alignSelf: 'center'/* margin top */ }} onClick={handleSubmit}>Submit and Log In</Button>
          </Link>

        </Sheet>
      </main>
    </CssVarsProvider>
  );
}