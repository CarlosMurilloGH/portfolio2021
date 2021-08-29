import React from 'react';
import emailjs from 'emailjs-com';
import "./ContactUs.css";


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_nl3be3t', 'template_d4yb3gp', e.target, 'user_YdhRB3sSkRM9YLjjZmpzA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />

        <label>Name</label>
        <input type="text" name="user_name" className="inputform" />

        <label>Company</label>
        <input type="text" name="user_company" className="inputform" />

        <label>Email</label>
        <input type="email" name="user_email" className="inputform" />

        <label>Message</label>
        <textarea contentEditable name="message" />

        <input type="submit" value="Send" className="button"/>
      </form>
    </div>
  );
}