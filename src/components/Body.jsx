import { MenuItem, TableBody, TableRow, TextField } from '@mui/material';
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
      setSelectedRow(null)
    setSelectedField(null)
  };

  return (
    <TableBody>
      {tableData?.map((row, index) => (
        <TableRow key={index} sx={{ cursor: 'pointer' }}>
          <TableCell
            onClickAway={handleSave}
            onClick={() => handleSelectField(row, 'id')}
            style={{
              backgroundColor:
                selectedRow === row.id && selectedField === 'id' ? 'yellow' : 'inherit'
            }}
          >
            {isFieldSelected(row, 'id') ? (
              <input
                type="number"
                value={row.id}
                onChange={(e) => handleFieldChange(e, 'id', row)}
              />
            ) : (
              row.id
            )}
          </TableCell>
          <TableCell
            onClickAway={handleSave}
            onClick={() => handleSelectField(row, 'name')}
            style={{
              backgroundColor:
                selectedRow === row.id && selectedField === 'name' ? 'yellow' : 'inherit'
            }}
          >
            {isFieldSelected(row, 'name') ? (
              <input
                type="text"
                value={row.name}
                onChange={(e) => handleFieldChange(e, 'name', row)}
              />
            ) : (
              row.name
            )}
          </TableCell>
          <TableCell
            onClickAway={handleSave}
            onClick={() => handleSelectField(row, 'description')}
          >
            {isFieldSelected(row, 'description') ? (
              <textarea
                value={row.description}
                onChange={(e) => handleFieldChange(e, 'description', row)}
              />
            ) : (
              row.description
            )}
          </TableCell>
          <TableCell
            onClickAway={handleSave}
            onClick={() => handleSelectField(row, 'date')}
            style={{
              backgroundColor:
                selectedRow === row.id && selectedField === 'date' ? 'yellow' : 'inherit'
            }}
          >
            {isFieldSelected(row, 'date') ? (
              <input
                type="date"
                value={row.date}
                onChange={(e) => handleFieldChange(e, 'date', row)}
              />
            ) : (
              row.date
            )}
          </TableCell>
          <TableCell
            onClickAway={handleSave}
            onClick={() => handleSelectField(row, 'status')}
            style={{
              backgroundColor:
                selectedRow === row.id && selectedField === 'status' ? 'yellow' : 'inherit'
            }}
          >
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
