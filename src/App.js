import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import RegisterForm from "./Components/RegisterForm";
import EditForm from "./Components/RegisterForm";
import { register } from "./api/user";
import ShowTable from "./Components/ShowTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
const App = () => {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <RegisterForm
                formTitle="فرم زیر را پر کنید."
                buttonTitle="ساخت اکانت"
              />
            </Route>
            <Route path="/edit/:id" exact>
              <EditForm />
            </Route>
            <Route path="/showtable" exact>
              <ShowTable />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
