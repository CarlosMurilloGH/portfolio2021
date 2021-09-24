import React from 'react';
import "./Skills.css";
import icono1 from "../assets/icono1.svg";
import icono2 from "../assets/icono2.svg";
import icono3 from "../assets/icono3.svg";
import icono4 from "../assets/icono4.svg";

export default function Skills() {
    return (
        <div className="containerSkills">
            <div className="caja">
                <div className="titulo">
                    <p>What i do</p>
                </div>

                <div className="skill">
                    <div className="skillimg">
                        <img src={icono1} alt="skill1"/>
                    </div>
                    
                    <div className="skilltext">
                        <h1>Front-End Development</h1>
                        
                        <div className="cajalista">

                            <div className="lista"> 
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>SCSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>                                 
                                </ul>
                            </div>

                            <div className="lista">
                                <ul>
                                    <li>React-Native</li>
                                    <li>API fetching</li>
                                    <li>Bootstrap</li>
                                    <li>Materialize</li>
                                    <li>Axios</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                                       
                </div>

                <div className="skill">
                    <div className="skillimg">
                        <img src={icono3} alt="skill3"/>
                    </div>
                    
                    <div className="skilltext">
                        <h1>Back-End Development</h1>

                        <ul>
                            <li>Node</li>
                            <li>PHP</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    
                </div>

                <div className="skill">
                    <div className="skillimg">
                        <img src={icono2} alt="skill2"/>
                    </div>
                    
                    <div className="skilltext">
                        <h1>Design</h1>

                        <ul>
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>After effects</li>
                        </ul>
                    </div>
                    
                </div>


                <div className="skill">
                    <div className="skillimg">
                        <img src={icono4} alt="skill4"/>
                    </div>
                    
                    <div className="skilltext">
                        <h1>Others</h1>

                        <div className="cajalista">

                            <div className="lista"> 
                                <ul>
                                    <li>Netlify</li>
                                    <li>Github</li>
                                    <li>SEO</li>
                                    <li>Excel</li>                                    
                                    <li>Slack</li>
                                </ul>
                            </div>

                            <div className="lista">
                                <ul>
                                    <li>Trello</li>
                                    <li>Slack</li>
                                    <li>HTML Email templates</li>    
                                </ul>
                            </div>

                        </div>
                       
                    </div>               
                </div>

                


            </div>
            
        </div>
    )
}
