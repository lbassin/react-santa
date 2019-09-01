import React from 'react';
import EmployeeRepository from "../../repositories/EmployeeRepository";
import { Link } from "react-router-dom";

const DetailsStyle = {
    width: '80%',
    maxWidth: '680px',
    margin: 'auto'
};

const TextCenter = {
    textAlign: 'center',
}

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeRepository.fetchOne(this.state.id).then(employee => {
            this.setState({ employee });
        });
    }

    render() {
        const employee = this.state.employee;

        return (
            <div style={DetailsStyle}>
                <div style={TextCenter}>
                    <p>
                        Name : {employee.name}
                    </p>
                    <p>
                        Role : {employee.role}
                    </p>
                </div>

                <hr/>

                <Link to="/employee/list">Back</Link>
            </div>
        )
    }
}

export default EmployeeDetails;
