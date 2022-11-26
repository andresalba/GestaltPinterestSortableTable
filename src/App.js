import './App.css';
import { Box, Text, Table } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React, {useState} from 'react';
import MockData from './MOCK_DATA.json';

function App() {
 
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState('asc');
  const sorting = (col) => {
      if (order === 'asc') {
          setOrder('desc');
          setData([...data].sort((a, b) => a[col] > b[col] ? 1 : -1));
      } else {
          setOrder('asc');
          setData([...data].sort((a, b) => a[col] < b[col] ? 1 : -1));
      }
  }

  return (
    <div className="App">
      {/* Table with Table.SortableHeaderCell gestalt ascending and descending*/}
      <Box padding={2}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.SortableHeaderCell
                onSortChange={()=>sorting("first_name")}
              >
                First Name
              </Table.SortableHeaderCell>
              <Table.SortableHeaderCell
                onSortChange={()=>sorting("last_name")}
              >
                Last Name
              </Table.SortableHeaderCell>
              <Table.SortableHeaderCell
                onSortChange={()=>sorting("email")}
              >
                Email
              </Table.SortableHeaderCell>
              <Table.SortableHeaderCell
                onSortChange={()=>sorting("gender")}
              >
                Gender
              </Table.SortableHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Text>{item.first_name}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{item.last_name}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{item.email}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{item.gender}</Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Box>
    </div>
  );
}

export default App;
