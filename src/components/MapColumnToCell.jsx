import Select from 'react-select';
import { useMemo } from 'react';

export const MapColumnToCell = ({ row, field, handleFieldChange, index }) => {
  const inputType = useMemo(() => {
    return field === 'id' ? 'number' : field === 'date' ? 'date' : 'text';
  }, [field]);
  switch (field) {
    case 'id':
    case 'name':
    case 'date':
      return (
        <input
          placeholder={`Enter ${field}...`}
          type={inputType}
          value={row[field]}
          onChange={(e) => handleFieldChange(e.target.value, field, index)}
        />
      );
    case 'description':
      return (
        <textarea
          placeholder={`Enter ${field}...`}
          value={row['description']}
          onChange={(e) => handleFieldChange(e.target.value, 'description', index)}
        />
      );
    case 'status':
      return (
        <Select
          value={{ value: row[field], label: row[field] }}
          label="Select status..."
          onChange={(selectedOption) => handleFieldChange(selectedOption.value, field, index)}
          options={[
            { value: 'active', label: 'Active' },
            { value: 'pending', label: 'Pending' },
            { value: 'cancelled', label: 'Cancelled' }
          ]}
        />
      );
    default:
      return null;
  }
};
