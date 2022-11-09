import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./modules/Dashboard";
import { Classes } from "./modules/Classes";
import { TeachersPage } from "./modules/Teachers/components";

const activeStyle = {
    boxShadow: "inset 0px -3px 0px #135bb4",
};

function App() {
    return (
        <BrowserRouter>
            <div className="menu-bar">
                <ul className="menu-item-wrapper">
                    <li className="menu-item logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="menu-item first">
                        <NavLink
                            to="/classes"
                            className="menu-item-link first"
                            style={({ isActive }: any) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            <span>Classes</span>
                        </NavLink>
                    </li>
                    <li className="menu-item second">
                        <NavLink
                            to="/teacher"
                            className="menu-item-link second"
                            style={({ isActive }: any) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            <span>Teacher</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/teacher" element={<TeachersPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
