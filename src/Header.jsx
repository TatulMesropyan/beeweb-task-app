import { TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react';
export const Header = ({ titles, onQueryChange }) => {
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <TableCell key={index}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
