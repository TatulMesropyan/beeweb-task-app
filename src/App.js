import { useEffect, useMemo, useState } from 'react';
import { Table } from '@mui/material';
import { onValue, ref } from 'firebase/database';

import { TableBody, TableHeader } from './components/';
import { db } from './firebase';

const titles = ['id', 'name', 'description', 'date', 'status'];
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});

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
    const queryKeys = Object.keys(query);
    const queryValue = queryKeys.length ? query[queryKeys[0]] : null;

    if (queryValue && data) {
      return data?.filter((row) =>
        queryKeys.some((field) =>
          row[field]?.toString().toLowerCase().includes(queryValue?.toString().toLowerCase())
        )
      );
    } else {
      return data;
    }
  }, [query, data]);

  return (
    <Table>
      <TableHeader titles={titles} onQueryChange={setQuery} />
      <TableBody titles={titles} tableData={filteredData} onFieldChange={setData} />
    </Table>
  );
}

export default App;
