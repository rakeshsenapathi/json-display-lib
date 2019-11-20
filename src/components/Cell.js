import React from 'react';

const Cell = (props) => {

    const cellMarkUp = props.header ? (
        <th onClick={() => props.sortByColumn(props.cell.id, props.cell.sortable)}>
            {props.cell.label}
        </th>
    ) : (
            <td>{props.cell.value}</td>
        );

    return (cellMarkUp);

}

export default Cell;