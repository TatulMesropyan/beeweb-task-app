import { Box, ClickAwayListener } from '@mui/material';
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
    updateData();
  };

  return (
    <ClickAwayListener onClickAway={handleSave}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw'
        }}
      >
        {tableData?.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ccc',
              padding: '8px',
              backgroundColor: '#f8f8f8'
            }}
          >
            {titles.map((field, idx) => (
              <TableCell
                key={idx}
                onClick={() => handleSelectField(index, field)}
                isFieldSelected={isFieldSelected(index, field)}
              >
                {isFieldSelected(index, field)
                  ? mapColumnToCell(row, field, handleFieldChange, index)
                  : row[field]}
              </TableCell>
            ))}
          </Box>
        ))}
      </Box>
    </ClickAwayListener>
  );
};
