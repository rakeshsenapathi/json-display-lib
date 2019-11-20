import React from 'react';
import Cell from './Cell';

const DataTable = (props) => {

    const renderHeadingRow = (_cell, cellIndex) => {

        return (
            <Cell
                key={`heading-${cellIndex}`}
                cell={_cell}
                sortByColumn={props.sortByColumn}
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
            {props.columnHeaders.map(renderHeadingRow)}
        </tr>
    );

    const populateBody = (props.rowData.map(renderRow));

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