import React from "react";
import amijoy from "../assets/amijoy.jpg";
import "../STYLES/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${amijoy})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name.."
            type="text"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter Your Email.."
            type="email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            rows={7}
            placeholder="Enter your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
