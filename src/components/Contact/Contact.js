import React from "react";
import "./Contact.css";

function Contact({ scrollTo }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleInputs() {
    console.log(name, email, subject, message);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="contact" id="contact">
      <div className="banner">
        <h2>"Let's make something great together!"</h2>
      </div>
      <div className="form">
        <h1>Contact</h1>
        <div className="name-email">
          <input
            className="name"
            type="text"
            placeholder="Name"
            required
            onChange={handleNameChange}
          />
          <input
            className="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleEmailChange}
          />
        </div>

        <input
          className="subject"
          type="text"
          placeholder="Subject"
          required
          onChange={handleSubjectChange}
        />
        <textarea
          className="message"
          placeholder="Message"
          onChange={handleMessageChange}
        ></textarea>
        <button
          onClick={() => {
            handleInputs();
            alert("Message sent");
          }}
          className="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
