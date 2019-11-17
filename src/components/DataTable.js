import React from 'react';
import { useSelector } from 'react-redux';
import Cell from './Cell';

const DataTable = () => {

    const columnHeaders = useSelector(state => state.columnHeaders.columnHeaders); // similar to mapStateToProps

    const rowData = useSelector(state => state.rowData.rowData);

    const renderHeadingRow = (_cell, cellIndex) => {

        return (
            <Cell
                key={`heading-${cellIndex}`}
                cell={_cell}
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