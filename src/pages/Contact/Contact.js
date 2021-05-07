import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main className="stack col-7 bg-transparent p-0">
      <div className="card-2 bg-white">
        <div className="card-1 bg-white">
          <div className="contact bg-white p-5">
            <h1 className="header">Contact.</h1>
            <hr className="solid"></hr>
            <div className="content">
              <p>Phone: (207) 890-8694</p>
              <p>
                Email:
                <a href="mailto:hill1635@gmail.com" target="_blank">
                  hill1635@gmail.com
                </a>
              </p>
              <a href="https://www.linkedin.com/in/tucker-hill-5254b979/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
