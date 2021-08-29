import React from 'react';
import "./HeroSection.css";
import {
    Link
  } from "react-router-dom";

export default function HeroSection() {
    return (
        <div>
            <div className="containerheader">
                <div className="title">
                    <p>Hi! I'm Carlos Murillo </p>
                     <p>a Front-End Developer</p>
                </div>

                <div className="paragraph">
                    <p>I'm a front-end developer who is passionate about learning more about web and mobile development, aspiring
                    to become a full stack web developer.
                    </p>
                </div>

                <div className="links">
                    
                    <p> Find out more about my   <Link to="/workpage">Work</Link>
                     
                     or <Link to="/contactpage">Get in touch</Link>
                    </p>
                    

                </div>

            </div>
        </div>
    )
}
