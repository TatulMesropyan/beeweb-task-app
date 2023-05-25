import {
  MenuItem,
  TableBody,
  TableCell,
  TableRow,
  TextareaAutosize,
  TextField
} from '@mui/material';
import { useState } from 'react';

export const Body = ({ tableData, onFieldChange }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const handleFieldChange = (e, field, row) => {
    const updated = { ...row, [field]: e.target.value };
    onFieldChange((prev) =>
      prev?.map((item) => (row.id === item.id ? { ...item, ...updated } : item))
    );
  };

  return (
    <TableBody>
      {tableData?.map((row, index) => (
        <TableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => setSelectedRow(row.id)}>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="number"
                value={row.id}
                onChange={(e) => handleFieldChange(e, 'id', row)}
              />
            ) : (
              row.id
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="text"
                value={row.name}
                onChange={(e) => handleFieldChange(e, 'name', row)}
              />
            ) : (
              row.name
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextareaAutosize
                value={row.description}
                onChange={(e) => handleFieldChange(e, 'description', row)}
              />
            ) : (
              row.description
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="date"
                value={row.date}
                onChange={(e) => handleFieldChange(e, 'date', row)}
              />
            ) : (
              row.date
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                select
                value={row.status}
                onChange={(e) => handleFieldChange(e, 'status', row)}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="canceled">Canceled</MenuItem>
              </TextField>
            ) : (
              row.status
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
