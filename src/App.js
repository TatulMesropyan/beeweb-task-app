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
  const handleFieldChange = (e,field) => {
      const updated = {...data ,[field]:e.target.value}
  }
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
          {data.map(({id, name, description, status, date}, index) => (
          <tr key={index}>
              <td>
                  <input
                      value={id}
                      name={id}
                      onChange={(e) => handleFieldChange(e,'id')}
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
