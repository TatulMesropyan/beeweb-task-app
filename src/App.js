import { useEffect, useMemo, useState } from 'react';
import { Box, Button } from '@mui/material';
import { onValue, ref, set } from 'firebase/database';

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
        if (firebaseData !== null) {
          const dataArray = Object.keys(firebaseData).map((key) => ({
            id: key,
            ...firebaseData[key]
          }));
          setData(dataArray);
        }
      });
    };
    fetchData();
  }, []);

  const updateData = async () => {
    const dataRef = ref(db, '/');
    await set(dataRef, data);
  };

  const addRow = () => {
    setData((prevState) => [
      ...prevState,
      { id: '', name: '', description: '', date: '', status: '' }
    ]);
  };

  const removeRow = () => {
    setData((prevState) => prevState.slice(0, -1));
    updateData();
  };

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
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
    >
      <TableHeader titles={titles} onQueryChange={setQuery} />
      <TableBody
        titles={titles}
        tableData={filteredData}
        onFieldChange={setData}
        updateData={updateData}
      />
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          position: 'sticky',
          bottom: '10px'
        }}
      >
        <Button onClick={addRow} disabled={data?.length === 32} variant="contained" fullWidth>
          Add row
        </Button>
        <Button
          onClick={removeRow}
          disabled={data.length === 0}
          color="error"
          variant="contained"
          fullWidth
        >
          Remove row
        </Button>
      </Box>
    </Box>
  );
}

export default App;
