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
            <div>
                <div className="menu-bar">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link to="/">
                                <img
                                    src={logo}
                                    className="App-logo"
                                    alt="logo"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/classes">Classes</Link>
                        </li>
                        <li>
                            <Link to="/teacher">Teacher</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/teacher" element={<Teachers />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
