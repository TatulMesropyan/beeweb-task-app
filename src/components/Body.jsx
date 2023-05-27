import { ClickAwayListener, TableBody, TableRow } from '@mui/material';
import { useState } from 'react';
import { TableCell } from './';
import { mapColumnToCell } from '../helpers';

export const Body = ({ titles, tableData, onFieldChange, updateData }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const handleFieldChange = (e, field, index) => {
    const updatedRow = { ...tableData[index], [field]: e.target.value };
    const updatedData = [...tableData];
    updatedData[index] = updatedRow;
    onFieldChange(updatedData);
  };
  const isFieldSelected = (index, field) => {
    return selectedRow === index && selectedField === field;
  };
  const handleSelectField = (index, field) => {
    setSelectedRow(index);
    setSelectedField(field);
  };
  const handleSave = () => {
    setSelectedRow(null);
    setSelectedField(null);
    updateData()
  };
  return (
    <ClickAwayListener onClickAway={handleSave}>
      <TableBody>
        {tableData?.map((row, index) => {
          return (
            <TableRow key={index} sx={{ cursor: 'pointer' }}>
              {titles.map((field, idx) => (
                <TableCell key={idx} onClick={() => handleSelectField(index, field)}>
                  {isFieldSelected(index, field)
                    ? mapColumnToCell(row, field, handleFieldChange, index)
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
