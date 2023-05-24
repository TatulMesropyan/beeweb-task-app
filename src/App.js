import './App.css';
import { useState } from 'react';
import { MenuItem, TableCell, TableRow, TextareaAutosize, TextField } from '@mui/material';
const mockData = [
  {
    id: 1,
    name: 'John',
    description: 'Lorem ipsum dolor sit amet',
    date: '2023-05-20',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane',
    description: 'Consectetur adipiscing elit',
    date: '2023-05-22',
    status: 'pending'
  },
  {
    id: 3,
    name: 'Bob',
    description: 'Sed do eiusmod tempor incididunt',
    date: '2023-05-23',
    status: 'canceled'
  }
];
function App() {
  const [data, setData] = useState(mockData);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleFieldChange = (e, field, row) => {
    const updated = { ...row, [field]: e.target.value };
    setData((prev) => prev?.map((item) => (row.id === item.id ? { ...item, ...updated } : item)));
  };
  console.log('Data', data);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      {data?.map((row, index) => (
        <TableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => setSelectedRow(row.id)}>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="number"
                value={row.id}
                onChange={(e) => handleFieldChange(e, 'id', row)}
              />
            ) : (
              row.id
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="text"
                value={row.name}
                onChange={(e) => handleFieldChange(e, 'name', row)}
              />
            ) : (
              row.name
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextareaAutosize
                value={row.description}
                onChange={(e) => handleFieldChange(e, 'description', row)}
              />
            ) : (
              row.description
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
              <TextField
                type="date"
                value={row.date}
                onChange={(e) => handleFieldChange(e, 'date', row)}
              />
            ) : (
              row.date
            )}
          </TableCell>
          <TableCell>
            {selectedRow === row.id ? (
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
          <TableCell></TableCell>
        </TableRow>
      ))}
    </table>
  );
}

export default App;
