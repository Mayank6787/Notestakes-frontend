import React, { useRef } from "react";
import "../index.css";
import Random from "../imgs/Random.png";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4gz6rq",
        "template_0uknn6m",
        form.current,
        "W8T5-4lAqEo8YWDR-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email has been recevied ")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h1 className="center">We are always there to help !!!</h1>
      <img src={Random} alt="Random" height="40px" width="40px" />
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactForm;
