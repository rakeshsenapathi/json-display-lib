import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';

const SearchBar = (props) => {

    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    const isFilterable = (id) => (props.columnHeaders.some(column => column.id === id && column.filterable === "true"));

    const handleChange = (event) => {

        const keyword = event.target.value;

        console.log("Triggered : " + keyword);

        setKeyword(keyword);

        const filteredRows = props.rowData
            .filter((row) => row.data.some((_cell) => {
                if (_cell.value.includes(keyword) && isFilterable(_cell.id)) {
                    console.log(_cell.value);
                    console.log(_cell.value.indexOf(keyword));
                    return true;
                }
                else {
                    return false;
                }
            }));

        dispatch({ type: types.SEARCH, payload: [...filteredRows] });

    }


    return (
        <div>
            <input type="text"
                value={keyword}
                onChange={handleChange} />
        </div>
    )

}

export default SearchBar;