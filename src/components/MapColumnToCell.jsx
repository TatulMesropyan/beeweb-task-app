import styled from '@emotion/styled';
import Select from 'react-select';
import { useMemo } from 'react';

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #5c9cea;
    box-shadow: 0 0 5px #5c9cea;
  }
`;

const StyledTextArea = styled.textarea`
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #5c9cea;
    box-shadow: 0 0 5px #5c9cea;
  }
`;

const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px;

    &:hover {
      border-color: #5c9cea;
    }

    &--is-focused {
      border-color: #5c9cea;
      box-shadow: 0 0 5px #5c9cea;
    }
  }
`;

export const MapColumnToCell = ({ row, field, handleFieldChange, index, onSave }) => {
  const inputType = useMemo(() => {
    return field === 'id' ? 'number' : field === 'date' ? 'date' : 'text';
  }, [field]);

  switch (field) {
    case 'id':
    case 'name':
    case 'date':
      return (
        <StyledInput
          placeholder={`Enter ${field}...`}
          type={inputType}
          value={row[field]}
          onChange={(e) => handleFieldChange(e.target.value, field, index)}
          onBlur={onSave}
        />
      );
    case 'description':
      return (
        <StyledTextArea
          placeholder={`Enter ${field}...`}
          value={row['description']}
          onChange={(e) => handleFieldChange(e.target.value, 'description', index)}
          onBlur={onSave}
        />
      );
    case 'status':
      return (
        <StyledSelect
          value={{ value: row[field], label: row[field] }}
          label="Select status..."
          onChange={(selectedOption) => handleFieldChange(selectedOption.value, field, index)}
          onBlur={onSave}
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
