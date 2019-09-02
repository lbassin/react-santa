import React from 'react';
import { Route } from "react-router-dom";
import EmployeeList from "./employee/EmployeeList";
import EmployeeNew from "./employee/EmployeeNew";
import EmployeeGenerate from "./employee/EmployeeGenerate";
import EmployeeDetails from "./employee/EmployeeDetails";
import EmployeeDelete from "./employee/EmployeeDelete";

const AreaStyle = {
    width: '80%',
    maxWidth: '680px',
    textAlign: 'center',
    margin: 'auto'
}

class Employee extends React.Component {
    render() {
        return (
            <div style={AreaStyle}>
                <Route exact path="/employee/list" component={EmployeeList}/>
                <Route exact path="/employee/new" component={EmployeeNew}/>
                <Route exact path="/employee/generate" component={EmployeeGenerate}/>
                <Route exact path="/employee/:id/view" component={EmployeeDetails}/>
                <Route exact path="/employee/:id/delete" component={EmployeeDelete}/>
            </div>
        );
    }
}

export default Employee;
