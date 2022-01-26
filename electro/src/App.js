import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage,Layout } from "./components";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App =() =>{
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <Layout>
            <Homepage/>
            </Layout>
          </div>
        </Route>
      </Switch>
    </Router>
  );
  
};

export default App;