import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import AppTableRows from './AppTableRow';

interface PropsTypes {
  header:string[],
  body:object[],
  actions:boolean
}


const AppTable = ({
    header,
    body,
    actions
}:PropsTypes) => {
    return (
      <TableContainer>
        <Table className="" size='medium'>
          <TableHead>
            <TableRow>
              {header.map(cell => <TableCell align='center' key={cell}>{cell}</TableCell>)}
              {actions && <TableCell align='center' className="w-max">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {body.map((row, i) => <AppTableRows key={i} celles={row}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default AppTable;