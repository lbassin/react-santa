import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmployee } from "../../redux/actions/employee";

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

        this.props.dispatch(fetchEmployee(props.match.params.id));
    }


    render() {
        const employee = this.props.employee;

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

const mapStateToProps = state => {
    const employee = state.employeeReducer.employee || {};

    return { employee };
}


export default connect(mapStateToProps, null)(EmployeeDetails);
