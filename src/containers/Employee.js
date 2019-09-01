import React from 'react';
import { Route } from "react-router-dom";
import EmployeeList from "./employee/EmployeeList";
import EmployeeNew from "./employee/EmployeeNew";
import EmployeeGenerate from "./employee/EmployeeGenerate";
import EmployeeDetails from "./employee/EmployeeDetails";

class Employee extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/employee/list" component={EmployeeList}/>
                <Route exact path="/employee/new" component={EmployeeNew}/>
                <Route exact path="/employee/generate" component={EmployeeGenerate}/>
                <Route exact path="/employee/:id/view" component={EmployeeDetails}/>
            </React.Fragment>
        );
    }
}

export default Employee;
