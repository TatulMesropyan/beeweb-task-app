import { MenuItem, TextField } from '@mui/material';

export const mapColumnToCell = (row, field, handleFieldChange) => {
  const inputType = field === 'id' ? 'number' : field === 'date' ? 'date' : 'text';
  switch (field) {
    case 'id':
    case 'name':
    case 'date':
      return (
        <input
          type={inputType}
          value={row[field]}
          onChange={(e) => handleFieldChange(e, field, row)}
        />
      );
    case 'description':
      return <textarea value={row[field]} onChange={(e) => handleFieldChange(e, field, row)} />;
    case 'status':
      return (
        <TextField select value={row.status} onChange={(e) => handleFieldChange(e, field, row)}>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="canceled">Canceled</MenuItem>
        </TextField>
      );
    default:
      return null;
  }
};
