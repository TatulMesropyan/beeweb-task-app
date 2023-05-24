import './App.css';
import {useState} from "react";
const mockData = [
    {
        id: 1,
        name: 'John',
        description: 'Lorem ipsum dolor sit amet',
        date: '2023-05-20',
        status: 'active',
    },
    {
        id: 2,
        name: 'Jane',
        description: 'Consectetur adipiscing elit',
        date: '2023-05-22',
        status: 'pending',
    },
    {
        id: 3,
        name: 'Bob',
        description: 'Sed do eiusmod tempor incididunt',
        date: '2023-05-23',
        status: 'canceled',
    },
];
function App() {
  const [data, setData] = useState(mockData)
  const handleFieldChange = (e,field,row) => {
      const updated =
          {...row ,[field]: e.target.value};
      setData((prev) => (
          prev?.map((item) =>  row.id === item.id ? {...item,...updated} : item)
          )
      )
  }
  console.log("Data", data)
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
          <tbody>
          {data?.map((row, index) => (
          <tr key={index}>
              <td>
                  <input
                      value={row.id}
                      name={row.id}
                      onChange={(e) => handleFieldChange(e,'id',row)}
                  />
              </td>
              <td>
                  Test Name
              </td>
              <td>
                  Test Description
              </td>
              <td>
                  Test Status
              </td>
              <td>
                  Test Date
              </td>
          </tr>
              ))}
          </tbody>
      </table>
  );
}

export default App;
