import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Employee from "./containers/Employee";
import Home from "./containers/Home";
import NotFound from "./components/NotFound";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <HeaderNav/>
                <Switch>
                    <Route path="/employee" component={Employee}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
