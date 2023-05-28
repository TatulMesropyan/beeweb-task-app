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
          backgroundColor: 'rgba(12, 27, 50, 0.9)'
        }}
      >
        {tableData?.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '8px',
              backgroundColor: index % 2 ? 'rgba(247, 169, 0, 0.7)' : 'rgba(12, 27, 50, 0.7)',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: index % 2 ? 'rgba(247, 169, 0, 0.9)' : 'rgba(12, 27, 50, 0.9)'
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
                    color={index % 2 ? 'rgba(12, 27, 50, 0.9)' : 'rgba(247, 169, 0, 0.9)'}
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
