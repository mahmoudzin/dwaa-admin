import React from 'react';
import { TableCell, TableRow } from '@mui/material';

interface PropsType {
    celles: object;
}

const AppTableRow = ({celles}:PropsType) => {
    return (
        <TableRow>
            {Object.values(celles).map((cell, i) => <TableCell align='center' key={i}>{cell}</TableCell>)}
        </TableRow>
    );
};

export default AppTableRow;