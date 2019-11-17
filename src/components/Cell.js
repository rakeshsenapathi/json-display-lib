import React from 'react';

const handleSort = (cell) => {

    if (cell.sortable === "true") {
        console.log(cell.label + "Is sortable");
    }

    else {
        console.log("Is not sortable");
    }
}


const Cell = ({ cell, header }) => {

    const cellMarkUp = header ? (
        <th onClick={() => handleSort(cell)}>
            {cell.label}
        </th>
    ) : (
            <td>{cell.value}</td>
        );

    return (cellMarkUp);

}

export default Cell;