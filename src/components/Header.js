import React from "react";
import "./Header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Header = () =>{
    return(
        <nav>
        <div className="container">
            <div className="header">
                
                <div className="logo">
                    <Link to="/" className="logotext">Carlos Murillo</Link>
                </div>

                <div className="menucontainer">
                    <nav>
                        <ul>
                            <li className="menu">
                                <Link to="/">Home</Link>
                            </li>

                            <li className="menu">
                                <Link to="/workpage">Work</Link>
                            </li>

                            <li className="menu">
                                <Link to="/contactpage">Contact me</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
        </nav>
    )
}

export default Header;