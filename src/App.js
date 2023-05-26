import { useEffect, useMemo, useState } from 'react';
import { Table } from '@mui/material';
import { ref, onValue } from 'firebase/database';

import { TableBody, TableHeader } from './components/';
import { db } from './firebase';

const titles = ['Id', 'Name', 'Description', 'Date', 'Status'];
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(null);

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

  const filteredData = useMemo(() => {
    if (query && data) {
      return data?.filter((row) =>
        Object.values(row).some(
          (value) => value?.toString().toLowerCase() === query?.toString().toLowerCase()
        )
      );
    } else return data;
  }, [query, data]);

  return (
    <Table>
      <TableHeader titles={titles} onQueryChange={setQuery} />
      <TableBody tableData={filteredData} onFieldChange={setData} />
    </Table>
  );
}

export default App;
