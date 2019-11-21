import React, { useState } from 'react';
import { filter_rows } from '../actions';
import store from '../store';

const SearchBar = (props) => {

    const [keyword, setKeyword] = useState("");

    // Check if the cell is filterable
    const isFilterable = (id) => (props.columnHeaders.some(column => column.id === id && column.filterable === "true"));

    const handleChange = (event) => {

        const keyword = event.target.value;

        setKeyword(keyword);

        const filteredRows = props.rowData
            .filter((row) => row.data.some((_cell) => {
                if (_cell.value.includes(keyword) && isFilterable(_cell.id)) {
                    return true;
                }
                else {
                    return false;
                }
            }));

        store.dispatch(filter_rows(filteredRows));

    }


    return (
        <div className="container--datatable__search">
            <input type="text"
                className="input--search"
                value={keyword}
                onChange={handleChange} />
            <p>Search</p>
        </div>
    )

}

export default SearchBar;