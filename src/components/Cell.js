import React from 'react';

const Cell = (props) => {

    const cellMarkUp = props.header ? (
        <th onClick={() => props.sortBy(props.cell.id)}>
            {props.cell.label}
        </th>
    ) : (
            <td>{props.cell.value}</td>
        );

    return (cellMarkUp);

}

export default Cell;