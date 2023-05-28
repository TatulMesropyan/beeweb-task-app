import { Paper } from '@mui/material';
import React from 'react';
import { TableCell } from './';

export const Header = ({ titles, onQueryChange }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'sticky',
        top: '10px',
        backgroundColor: 'rgb(12, 27, 50)',
        padding: '8px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        zIndex: 2
      }}
    >
      {titles?.map((title, index) => (
        <React.Fragment key={index}>
          <TableCell
            sx={{
              fontWeight: 'bold',
              fontSize: '14px',
              color: 'white'
            }}
          >
            {title?.toUpperCase()}
          </TableCell>
          <input
            onChange={(e) => onQueryChange({ [title]: e.target.value })}
            placeholder={`Search for ${title}...`}
            style={{
              padding: '6px',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '4px',
              fontSize: '14px',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white'
            }}
          />
        </React.Fragment>
      ))}
    </Paper>
  );
};
