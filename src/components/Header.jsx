import { TableHead, TableRow, TextField } from '@mui/material';
import { TableCell } from './';
import React, { useState } from 'react';
export const Header = ({ titles, onQueryChange }) => {
  const [showTextfield, setShowTextfield] = useState(false);
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <React.Fragment key={index}>
            {showTextfield ? (
              <TextField onChange={onQueryChange} label={`Search for ${title}...`} />
            ) : (
              <TableCell>{title}</TableCell>
            )}
          </React.Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
};
