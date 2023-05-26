import {Stack, TableHead, TableRow, TextField} from '@mui/material';
import { TableCell } from './';
import React, { useState } from 'react';
export const Header = ({ titles, onQueryChange }) => {
  const [showTextfield, setShowTextfield] = useState(false);
  return (
    <TableHead>
      <TableRow>
        {titles?.map((title, index) => (
          <Stack direction='row' key={index}>
              <input onChange={(e) => onQueryChange(e.target.value)} placeholder={`Search for ${title}...`} />
              <TableCell>
                {title}
              </TableCell>
          </Stack>
        ))}
      </TableRow>
    </TableHead>
  );
};
