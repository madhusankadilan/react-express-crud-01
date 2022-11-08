import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Classes } from "./components/Classes";
import { Teachers } from "./components/Teachers";

function App() {
    return (
        <BrowserRouter>
            <div className="menu-bar">
                <ul className="menu-item-wrapper">
                    <li className="menu-item">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/classes" className="menu-item-link">
                            Classes
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/teacher" className="menu-item-link">
                            Teacher
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/teacher" element={<Teachers />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
