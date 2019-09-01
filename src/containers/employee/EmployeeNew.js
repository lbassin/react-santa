import React from 'react';
import EmployeeForm from '../employee/EmployeeForm';
import EmployeeRepository from "../../repositories/EmployeeRepository";

const formStyle = {
    width: '80%',
    maxWidth: '650px',
    textAlign: 'center',
    border: '1px solid #000',
    padding: '6px',
    margin: 'auto'
};

class EmployeeNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeCreated: false
        }
    }

    handleSubmit = (employee) => {
        EmployeeRepository.create(employee);

        this.setState({
            employeeCreated: true
        });
    }

    render() {
        return (
            <div style={formStyle}>
                <p>Add an employee</p>
                <EmployeeForm onSubmit={this.handleSubmit}/>
                {this.state.employeeCreated && <p>Employee successfully created</p>}
            </div>
        );
    }
}

export default EmployeeNew;
