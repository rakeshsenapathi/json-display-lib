import React from 'react';
import './App.css';
import * as types from './constants/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';

// TODOS: While taking the data as a json, mock the server call by using timeOut for getting json response.
function App() {

  let columnIds = [];
  const rowData = useSelector(state => state.rowData.rowData);
  const filtered_row = useSelector(state => state.rowData.filteredRows);
  const columnHeaders = useSelector(state => state.columnHeaders.columnHeaders); // similar to mapStateToProps

  const dispatch = useDispatch();

  columnHeaders.map((column) => columnIds.push(column.id));

  const sortByColumn = (column, isSortable) => {

    if (isSortable === "false") {
      return;
    }

    let id = columnIds.indexOf(column);

    const rowDataCopy = rowData; // Tp maintain state immutability, maintaining a copy of the state.

    rowDataCopy.sort((a, b) => {
      if (a.data[id].value < b.data[id].value) {
        return -1;
      }
      else if (a.data[id].value > b.data[id].value) {
        return 1;
      }
      return 0;
    })

    dispatch({
      type: types.SORT_BY_COLUMN, payload: [...rowDataCopy]
    });

  };


  return (
    <div className="App">
      <SearchBar
        rowData={rowData}
        columnHeaders={columnHeaders}
        columnIds={columnIds}
      />
      <DataTable columnHeaders={columnHeaders}
        rowData={filtered_row}
        sortByColumn={sortByColumn}
      />
    </div >
  );
}

export default App;
