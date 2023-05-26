import { MenuItem, TableBody, TableRow, TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react';
import { TableCell } from './';

export const Body = ({ tableData, onFieldChange }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const handleFieldChange = (e, field, row) => {
    const updated = { ...row, [field]: e.target.value };
    onFieldChange((prev) =>
      prev?.map((item) => (row.id === item.id ? { ...item, ...updated } : item))
    );
  };

  const handleSelectField = (row, field) => {
    setSelectedRow(row.id);
    setSelectedField(field);
  };

  const isFieldSelected = (row, field) => {
    return selectedRow === row.id && selectedField === field;
  };

  const handleSave = () => {
    setSelectedRow(null);
    setSelectedField(null);
  };
  console.log(selectedField, selectedRow);
  return (
    <TableBody>
      {tableData?.map((row, index) => (
        <TableRow key={index} sx={{ cursor: 'pointer' }} onBlur={handleSave}>
          <TableCell onClick={() => handleSelectField(row, 'id')}>
            {isFieldSelected(row, 'id') ? (
              <TextField
                type="number"
                value={row.id}
                onChange={(e) => handleFieldChange(e, 'id', row)}
              />
            ) : (
              row.id
            )}
          </TableCell>
          <TableCell onClick={() => handleSelectField(row, 'name')} onAwayClick={handleSave}>
            {isFieldSelected(row, 'name') ? (
              <TextField
                type="text"
                value={row.name}
                onChange={(e) => handleFieldChange(e, 'name', row)}
              />
            ) : (
              row.name
            )}
          </TableCell>
          <TableCell onClick={() => handleSelectField(row, 'description')}>
            {isFieldSelected(row, 'description') ? (
              <TextareaAutosize
                value={row.description}
                onChange={(e) => handleFieldChange(e, 'description', row)}
              />
            ) : (
              row.description
            )}
          </TableCell>
          <TableCell onClick={() => handleSelectField(row, 'date')}>
            {isFieldSelected(row, 'date') ? (
              <TextField
                type="date"
                value={row.date}
                onChange={(e) => handleFieldChange(e, 'date', row)}
              />
            ) : (
              row.date
            )}
          </TableCell>
          <TableCell onClick={() => handleSelectField(row, 'status')}>
            {isFieldSelected(row, 'status') ? (
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
