import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
  
export default function Footer() {
    return (
        <div className="footercontainer">

            <div className="footercta">
                
                <div className="footertext">
                    <p className="footertitle">
                        ¿Ready to get started?
                    </p>

                    <p className="footerparagraph">
                        Send me a message
                    </p>
                </div>

                <Link to="/contactpage">
                <div className="footerbutton">
                    <button className="footerbtn">Get in touch</button>
                </div>
                </Link>

            </div>
        
        </div>         
        
    )
}
