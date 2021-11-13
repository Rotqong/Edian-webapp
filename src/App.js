/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route />
            <Route />
            <Route />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
