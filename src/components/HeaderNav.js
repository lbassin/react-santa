import React from 'react';
import { Link } from "react-router-dom";

const LinkStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    border: '1px solid #000',
    margin: '0 8px'
};

const ListStyle = {
    textAlign: 'center'
};

class HeaderNav extends React.Component {
    render() {
        return (
            <nav>
                <ul style={ListStyle}>
                    <li style={LinkStyle}>
                        <Link to="/employee/list">Employees list</Link>
                    </li>
                    <li style={LinkStyle}>
                        <Link to="/employee/new">Add new employee</Link>
                    </li>
                    <li style={LinkStyle}>
                        <Link to="/employee/generate">Generate groups</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default HeaderNav;
