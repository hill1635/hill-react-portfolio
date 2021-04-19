import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact">
      <h1 className="header">Contact.</h1>
      <hr className="solid"></hr>
      <p>Phone: (207) 890-8694</p>
      <p>
        Email:
        <a href="mailto:hill1635@gmail.com" target="_blank">
          hill1635@gmail.com
        </a>
      </p>
      <a
        href="https://www.linkedin.com/in/tucker-hill-5254b979/"
        target="_blank"
      >
        LinkedIn
      </a>
    </main>
  );
}

export default Contact;