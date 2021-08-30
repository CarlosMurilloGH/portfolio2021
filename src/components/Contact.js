import React from 'react';
import ContactUs from './ContactUs';
import "./Contact.css";

export default function Contact() {
    return (
        <div className="Contactcontainer">
            <div className="caja1">
                <div className="contacttitle">
                    <p>Let's talk!</p>
                </div>
                
                <div className="contacttext">
                    <p>
                        If you have a project in mind that could use my UX/UI Design and Front-End 
                        Development skills, please feel free to get in touch. 
                    </p>
                </div>

            </div>
                
            <div className="caja2">
                <div>
                    <p>Send me a message</p>
                </div>
                <div className="cajaform">
                    <ContactUs />
                </div>
            </div>
        
        </div>         
        
    )
}
