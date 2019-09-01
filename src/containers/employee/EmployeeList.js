import React from 'react';
import EmployeeRow from "../../components/Employee/EmployeeRow";
import EmployeeRepository from '../../repositories/EmployeeRepository';

const rowStyle = {
    border: '1px solid #000',
    padding: '8px',
    textAlign: 'center'
};

const tableStyle = {
    margin: 'auto',
    borderCollapse: 'collapse'
};

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        EmployeeRepository.fetchAll().then((employees) => {
            this.setState({
                employees
            });
        });
    }

    render() {
        const employees = this.state.employees;
        console.log(employees);

        return (
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={rowStyle}>ID</th>
                    <th style={rowStyle}>Name</th>
                    <th style={rowStyle}>Role</th>
                    <th style={rowStyle}>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) =>
                    <EmployeeRow employee={employee} key={index}/>
                )}
                {employees && employees.length === 0 &&
                    <tr style={rowStyle}>
                        <td colSpan={4}>Loading</td>
                    </tr>
                }
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;
