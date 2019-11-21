import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import { sort_by_column } from './actions';
import store from './store';

// TODOS: While taking the data as a json, mock the server call by using timeOut for getting json response.
function App() {

  let columnIds = [];
  const rowData = useSelector(state => state.rowData.rowData);
  const [sortOrder, setSortOrder] = useState("ascending"); // Keeping a track of sorting order
  const filtered_row = useSelector(state => state.rowData.filteredRows); // altered rowData due to search feature 
  const columnHeaders = useSelector(state => state.columnHeaders.columnHeaders); // similar to mapStateToProps

  columnHeaders.map((column) => columnIds.push(column.id));

  const sortByColumn = (column, isSortable) => {

    // Prevent re-rendering if the column is not sortable
    if (isSortable === "false") {
      return;
    }

    let id = columnIds.indexOf(column); //Get the index of selected column.

    filtered_row.sort((a, b) => {
      if (a.data[id].value < b.data[id].value) {
        if (sortOrder === "ascending") {
          setSortOrder("descending");
          return -1;
        }
        else {
          setSortOrder("ascending");
          return 1;
        }
      }
      else if (a.data[id].value > b.data[id].value) {
        if (sortOrder === "ascending") {
          setSortOrder("descending");
          return 1;
        }
        else {
          setSortOrder("ascending");
          return -1;
        }
      }
      return 0;
    })

    store.dispatch(sort_by_column(filtered_row));

  };


  return (
    <div className="container--datatable">
      <SearchBar
        rowData={rowData}
        columnHeaders={columnHeaders}
        columnIds={columnIds}
      />
      <DataTable
        className="container--datatable__table"
        columnHeaders={columnHeaders}
        rowData={filtered_row}
        sortByColumn={sortByColumn}
      />
    </div >
  );
}

export default App;
