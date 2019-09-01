import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Employee from "./containers/Employee";

function App() {
  return (
    <React.Fragment>
        <Header/>
        <BrowserRouter>
            <HeaderNav/>
            <Route path="/employee" component={Employee}/>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
