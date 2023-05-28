import { Box, ClickAwayListener, Typography } from '@mui/material';
import { useState } from 'react';
import { TableCell, MapColumnToCell } from './';

export const Body = ({ titles, tableData, onFieldChange, updateData }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedField, setSelectedField] = useState(null);

  const handleSelectField = (index, field) => {
    setSelectedRow(index);
    setSelectedField(field);
  };

  const handleSave = () => {
    setSelectedRow(null);
    setSelectedField(null);
    updateData();
  };

  const handleFieldChange = (value, field, index) => {
    const updatedRow = { ...tableData[index], [field]: value };
    const updatedData = [...tableData];
    updatedData[index] = updatedRow;
    onFieldChange(updatedData);
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
              backgroundColor: index % 2 ? '#f8f8f8' : '#ffffff',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f2f2f2'
              }
            }}
          >
            {titles?.map((field, idx) => (
              <TableCell
                key={idx}
                onClick={() => handleSelectField(index, field)}
                isFieldSelected={selectedRow === index && selectedField === field}
              >
                {selectedRow === index && selectedField === field ? (
                  <MapColumnToCell
                    row={row}
                    field={field}
                    handleFieldChange={handleFieldChange}
                    index={index}
                    onSave={handleSave}
                  />
                ) : (
                  <Typography
                    paragraph
                    padding="4px"
                    fontSize="14px"
                    color={row[field] ? 'black' : 'rgb(235, 237, 240)'}
                  >
                    {row[field] ? row[field] : 'empty'}
                  </Typography>
                )}
              </TableCell>
            ))}
          </Box>
        ))}
      </Box>
    </ClickAwayListener>
  );
};
