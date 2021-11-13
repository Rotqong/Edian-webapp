import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Edian</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/:id" className="nav-link">Create Exercise Log</Link>
                        </li>
                    </ul>
                </div>
                <div className="account navbar">
                    <li>
                        
                    </li>
                </div>
            </nav>
        );
    }
}