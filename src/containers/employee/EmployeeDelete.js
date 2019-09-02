import React from 'react';

class EmployeeDelete extends React.Component {

    constructor(props) {
        super(props);

        console.log()
        this.state = {
            employee: {
                name: 'test'
            }
        };
    }

    deleteUser = () => {
        alert('Removed');
    }

    goBack = () => {
        alert('Back');
    }

    render() {
        const { employee } = this.state;

        return (
            <React.Fragment>
                <p>User {employee.name} will be remove, do you want to continue ?</p>
                <button onClick={this.deleteUser}>Yes</button>
                <button onClick={this.goBack}>No</button>
            </React.Fragment>
        );
    }
}

export default EmployeeDelete;
