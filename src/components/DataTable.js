import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cell from './Cell';
import * as types from '../constants/actionTypes';

const DataTable = () => {

    const columnHeaders = useSelector(state => state.columnHeaders.columnHeaders); // similar to mapStateToProps

    let columnIds = [];

    const dispatch = useDispatch();

    const rowData = useSelector(state => state.rowData.rowData);

    const sortBy = (column) => {

        let id = columnIds.indexOf(column);

        const rowDataCopy = rowData;

        dispatch({
            type: types.SORT_BY_COLUMN, payload: rowDataCopy.sort((a, b) => {
                if (a.data[id].value < b.data[id].value) {
                    return -1;
                }
                else if (a.data[id].value > b.data[id].value) {
                    return 1;
                }
                return 0;
            })
        })
        // sortByColumn();

    }

    const renderHeadingRow = (_cell, cellIndex) => {

        columnIds.push(_cell.id);

        return (
            <Cell
                key={`heading-${cellIndex}`}
                cell={_cell}
                sortBy={sortBy}
                header={true}
            />
        );

    }

    const renderRow = (_row, rowIndex) => {

        return (

            <tr key={`row-${rowIndex}`}>

                {_row.data.map((_cell, index) => {

                    return (
                        <Cell
                            key={`cell${index}`}
                            cell={_cell}
                            header={false}
                        />
                    )

                })}

            </tr>
        );

    }

    const populateHeader = (
        <tr>
            {columnHeaders.map(renderHeadingRow)}
        </tr>
    );

    const populateBody = (rowData.map(renderRow));

    return (

        <div>

            <table style={{ "margin": "0 auto" }}>

                <thead>{populateHeader}</thead>
                <tbody>{populateBody}</tbody>

            </table>

        </div>

    );


}

export default DataTable;