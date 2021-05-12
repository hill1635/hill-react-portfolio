import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main className="stack col-7 bg-transparent p-0">
      <div className="card-1 row">
        <div className="card-2 row bg-white">
          <div className="card-3 row bg-white">
            <div className="contact row bg-white">
              <div className="logo col-4">
                <div className="letters">
                  <span className="col-12 letter-t">T</span>
                  <span className="col-12 letter-h">H</span>
                </div>
              </div>
              <div className="space col-1"></div>
              <div className="info col-7 p-5">
                <h1 className="card-name">Tucker Hill</h1>
                <hr className="solid bg-dark"></hr>
                <div className="content mt-5">
                  <p>(207) 890-8694
                  <i class="fas fa-phone-square p-1"></i>
                  </p>
                  <p>
                    <a href="mailto:hill1635@gmail.com" target="_blank">
                      hill1635@gmail.com
                    </a>
                    <i class="fas fa-envelope-square"></i>
                  </p>
                  <a href="https://www.linkedin.com/in/tucker-hill-5254b979/" target="_blank">
                    LinkedIn
                  </a>
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
