import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {useEffect, useState} from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import Numbers from './Numbers';
import Box from '@mui/material/Box';




export default function BasicTable() {
  
const [data, setData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(4);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data);
      
    })}, []); 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell sx={{ fontWeight: 'bold' }}>Employee Id</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">User Name&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">Email&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">ID&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">Edit&nbsp;(g)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">Delete&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPosts.map((data) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{data.id}</TableCell>
              <TableCell align="center">{data.name}</TableCell>
              <TableCell align="center">{data.username}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center"><ModeEditOutlineIcon/></TableCell>
              <TableCell align="center"><DeleteOutlineIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{position: 'absolute',
          left: '30%',
          zIndex: 'modal',}} >
          <Numbers
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} 
          
          />
      </Box>
      
      
    </TableContainer>
  );
}


