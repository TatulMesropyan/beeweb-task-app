import { MenuItem, TextField } from '@mui/material';

export const mapColumnToCell = (row, field, handleFieldChange) => {
  switch (field) {
    case 'id':
    case 'name':
      return (
        <input
          type={field === 'id' ? 'number' : 'text'}
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
    case 'date':
      return (
        <input type="date" value={row[field]} onChange={(e) => handleFieldChange(e, field, row)} />
      );
    default:
      return null;
  }
};
