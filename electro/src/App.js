import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage, Layout, Location, CarrierProfile } from "./components";
import "./App.css";

import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";

const App =() =>{
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={
            <Layout className="layout-opct">
            <Homepage/>
            </Layout>
            }
        />
        <Route exact path="/home" element={
            <Layout>
            <Location/>
            </Layout>
            }
        />
        <Route exact path="/Cprofile" element={
            <Layout>
            <CarrierProfile/>
            </Layout>
            }
        />
      </Routes>
    </Router>
  );
  
};

export default App;