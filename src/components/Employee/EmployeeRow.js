import React from 'react';
import { Link } from "react-router-dom";

const rowStyle = {
    border: '1px solid #000',
    padding: '8px'
};

const listStyle = {
    listStyleType: 'none',
    paddingLeft: 0,
    textAlign: 'center'
};

export default (props) => (
    <tr>
        <td style={rowStyle}>{props.employee.id}</td>
        <td style={rowStyle}>{props.employee.name}</td>
        <td style={rowStyle}>{props.employee.role}</td>
        <td style={rowStyle}>
            <ul style={listStyle}>
                <li>
                    <Link to={`/employee/${props.employee.id}/view`}>Details</Link>
                </li>
                <li>
                    <Link to={`/employee/${props.employee.id}/delete`}>Remove</Link>
                </li>
            </ul>
        </td>
    </tr>
);
