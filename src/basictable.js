import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(flag,name,cost) {
  return {flag,name,cost};
}

const rows = [
  createData('fi fi-us', "united States","12,897"),
  createData('fi fi-in', "India","9,176"),
  createData('fi fi-gb',"United Kingdom","10,284"),
  createData('fi fi-nl', "Neatherlands","6,467"),
  createData('fi fi-af',"Afghanistan","5,043"),
];

export default function BasicTable() {
  return (
    <TableContainer className="basictable" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                <span class={row.flag} 
                style={{
                    height:"20px",
                    width:"20px",  
                    borderRadius:"50%",
                    objectFit:'cover',
                }}>
                </span>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">${row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
