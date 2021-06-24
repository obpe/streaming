import React from 'react';
import './chart.css';

const Chart = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    )
}

export default Chart;