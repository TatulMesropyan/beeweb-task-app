import './App.css';
import { useEffect, useState } from 'react';
import { Table } from '@mui/material';
import { Body as TableBody } from './Body';
import { Header as TableHeader } from './Header';
import { ref, update, onValue } from 'firebase/database';
import { db } from './firebase';

const titles = ['Id', 'Name', 'Description', 'Date', 'Status'];
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, '/');
      await onValue(dataRef, (snapshot) => {
        const firebaseData = snapshot.val();
        const dataArray = Object.keys(firebaseData).map((key) => ({
          id: key,
          ...firebaseData[key]
        }));
        setData(dataArray);
      });
    };
    fetchData();
  }, []);

  const filteredData = query ? data.filter((row) =>
      Object.values(row).some((value) =>
          value.toString().toLowerCase() === query.toLowerCase())
  ) : data;

  return (
    <Table>
      <TableHeader titles={titles} />
      <TableBody tableData={filteredData} onFieldChange={setData} />
    </Table>
  );
}

export default App;
