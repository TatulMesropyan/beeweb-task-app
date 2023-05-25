import './App.css';
import { useState } from 'react';
import { Table } from '@mui/material';
import { Body as TableBody } from './Body';
import { Header as TableHeader } from './Header';
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
const titles = ['Id', 'Name', 'Description', 'Date', 'Status'];
function App() {
  const [data, setData] = useState(mockData);
  return (
    <Table>
      <TableHeader titles={titles} />
      <TableBody tableData={data} onFieldChange={setData} />
    </Table>
  );
}

export default App;
