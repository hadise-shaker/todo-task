import "./App.css";
import MainLayout from "./Layout/MainLayout";
import RegisterForm from "./Components/RegisterForm";
import EditForm from "./Components/EditForm";
import ShowTable from "./Components/ShowTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
const App = () => {
  const [selected, setSelected] = useState([]);
  const handleAction = (info) => {
    setSelected(info);
  };
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <RegisterForm />
            </Route>
            <Route path="/edit/:id" exact>
              <EditForm data={selected} />
            </Route>
            <Route path="/showtable" exact>
              <ShowTable action={handleAction} />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
