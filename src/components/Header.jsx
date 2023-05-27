import { Box, Paper } from '@mui/material';
import React from 'react';
import { TableCell } from './';
export const Header = ({ titles, onQueryChange }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'sticky',
        textAlign: 'center',
        zIndex: 2,
        top: '10px',
        backgroundColor: 'white',
        padding: '4px 8px 4px'
      }}
    >
      {titles?.map((title, index) => (
        <React.Fragment key={index}>
          <TableCell>{title.toUpperCase()}</TableCell>
          <input
            onChange={(e) => onQueryChange({ [title]: e.target.value })}
            placeholder={`Search for ${title}...`}
          />
        </React.Fragment>
      ))}
    </Paper>
  );
};
