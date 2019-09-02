import React from 'react';
import EmployeeRow from "../../components/Employee/EmployeeRow";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actions/employee";

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

        this.props.fetchEmployees();
    }

    render() {
        const employees = this.props.employees;

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

const mapStateToProps = state => {
    const { employees } = state.employeeReducer;

    return { employees };
}

const mapDispatchToProps = dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
