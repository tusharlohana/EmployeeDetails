import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import TableDetails from './components/TableDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route exact path="/" component={RegistrationForm}></Route>
            <Route exact path="/details" component={TableDetails}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App