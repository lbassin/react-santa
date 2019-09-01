import React from 'react';

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }


    render() {
        return <div>Details {this.state.id}</div>
    }
}

export default EmployeeDetails;
