import React from 'react';
import { Link } from "react-router-dom";

const rowStyle= {
    border: '1px solid #000',
    padding: '8px'
};

export default (props) => (
    <tr>
        <td style={rowStyle}>{props.employee.id}</td>
        <td style={rowStyle}>{props.employee.name}</td>
        <td style={rowStyle}>{props.employee.role}</td>
        <td style={rowStyle}>
            <Link to={`/employee/${props.employee.id}/view`}>Details</Link>
        </td>
    </tr>
);
