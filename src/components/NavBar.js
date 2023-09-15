import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginFinal from './Login';






export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1}}  >
      <AppBar position="static" >
        <Toolbar className='bg-color'>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IndiaPost
          </Typography>
          
          <Button color="inherit" onClick={handleOpen}>Login</Button>
          <Button color="inherit"><Link to="/Services">Redux</Link></Button>
          <Button color="inherit"><Link to="/Post">Post</Link></Button>
          <Button color="inherit"><Link to="/Users">Users</Link></Button>
          <Button color="inherit"><Link to="/BagDispatch">Bag Dispatch</Link></Button>
        </Toolbar>
        <LoginFinal open={open} handleClose={handleClose}/>
      </AppBar>
    </Box>
  );
}