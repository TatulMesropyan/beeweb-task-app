import { Paper } from '@mui/material';
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
        padding: '8px',
        borderBottom: '1px solid #ccc',
        width: '100%'
      }}
    >
      {titles?.map((title, index) => (
        <React.Fragment key={index}>
          <TableCell
            sx={{
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            {title?.toUpperCase()}
          </TableCell>
          <input
            onChange={(e) => onQueryChange({ [title]: e.target.value })}
            placeholder={`Search for ${title}...`}
            style={{
              padding: '6px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              width: '100%'
            }}
          />
        </React.Fragment>
      ))}
    </Paper>
  );
};
