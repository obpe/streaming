import React from 'react';
import './table.css';

const Table = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    )
}

export default Table;