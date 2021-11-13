import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navhead from "./components/navbar.component";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Home from "./components/home";
import Layout from "./components/layout.component";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="login" element={<Layout><Login /></Layout>} />
          <Route path="signup" element={<Layout><Signup /></Layout>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
