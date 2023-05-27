import { ClickAwayListener, TableBody, TableRow } from '@mui/material';
import { useState } from 'react';
import { TableCell } from './';
import { mapColumnToCell } from '../helpers';

export const Body = ({ titles, tableData, onFieldChange }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const handleFieldChange = (e, field, row) => {
    const updated = { ...row, [field]: e.target.value };
    onFieldChange((prev) =>
      prev?.map((item) => (row.id === item.id ? { ...item, ...updated } : item))
    );
  };
  const isFieldSelected = (row, field) => {
    return selectedRow === row.id && selectedField === field;
  };
  const handleSelectField = (row, field) => {
    setSelectedRow(row.id);
    setSelectedField(field);
  };
  const handleSave = () => {
    setSelectedRow(null);
    setSelectedField(null);
  };
  return (
    <ClickAwayListener onClickAway={handleSave}>
      <TableBody>
        {tableData?.map((row, index) => {
          return (
            <TableRow key={index} sx={{ cursor: 'pointer' }}>
              {titles.map((field) => (
                <TableCell onClick={() => handleSelectField(row, field)}>
                  {isFieldSelected(row, field)
                    ? mapColumnToCell(row, field, handleFieldChange)
                    : row[field]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </ClickAwayListener>
  );
};
