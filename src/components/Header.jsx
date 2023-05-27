import { TableHead, TableRow } from '@mui/material';
import React from 'react';
import { TableCell } from './';
export const Header = ({ titles, onQueryChange }) => {
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <React.Fragment key={index}>
            <TableCell>{title.toUpperCase()}</TableCell>
            <input
              onChange={(e) => onQueryChange({ [title]: e.target.value })}
              placeholder={`Search for ${title}...`}
            />
          </React.Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
};
