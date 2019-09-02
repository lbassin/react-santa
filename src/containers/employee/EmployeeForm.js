import React from 'react';

const inputStyle = {
    marginBottom: '12px'
};

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            role: ''
        }
    }

    submitForm = (event) => {
        event.preventDefault();

        // TODO Data validation

        this.props.onSubmit(this.state);
    }

    handleEdit = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div style={inputStyle}>
                    <label>
                        Name <br/>
                        <input name="name" type="text" onKeyUp={this.handleEdit}/>
                    </label>
                </div>

                <div style={inputStyle}>
                    <label>
                        Role <br/>
                        <input name="role" type="text" onKeyUp={this.handleEdit}/>
                    </label>
                </div>

                <div style={inputStyle}>
                    <button>Add employee</button>
                </div>
            </form>
        );
    }
}

export default EmployeeForm;
