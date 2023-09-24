import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login.js";
import Dashboard from "./Dashboard/Dashboard.js";
import Users from "./pages/users.jsx";
import UserList from "./pages/UsersList.jsx";
import Test from "./pages/Test.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          {/* <Dashboard /> */}
          <Test/> 
          {/* <Users />
          <UserList /> */}
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
