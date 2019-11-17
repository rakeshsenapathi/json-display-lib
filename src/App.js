import React from 'react';
import './App.css';
import DataTable from './components/DataTable';

// TODOS: While taking the data as a json, mock the server call by using timeOut for getting json response.
function App() {

  return (
    <div className="App">
      <DataTable />
    </div >
  );
}

export default App;
