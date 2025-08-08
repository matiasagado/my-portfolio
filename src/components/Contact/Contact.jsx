import "./Contact.css";
import emailjs from '@emailjs/browser';
import Reatc, { useState, useRef } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6kspapd', 'template_9y9xubi', form.current, {
        publicKey: 'Qsyy2nRt_yavzctv7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

  const socialLinks = [
    {
      name: "Github",
      icon: "fab fa-github",
      url: "https://github.com/matiasagado",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/matiasagado",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/matt_agado",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:mfagado@usfca.edu",
    },
  ];
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div className="section-title">contact me_</div>
      </div>
      <div className={`contact-container ${isVisible ? "visible" : ""}`}>
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm currenlty looking for new opportunities. Whether you have a
            question or want to get in touch, I'll try my best to get back to
            you.
          </p>
        </div>
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success">
              <h3>Thank You!</h3>
              <p>
                Your message have been successfully sent! I will get back to you
                soon.
              </p>
            </div>
          ) : (
            <form className="contact-form" ref={form}>
              {formError && <div className="form-error">{formError}</div>}
              <div className="form-group">
                <label htmlfor="name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your Name"
                ></input>
              </div>
              <div className="form-group">
                <label htmlfor="email">Email</label>
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  placeholder="your.email@example.com"
                ></input>
              </div>
              <div className="form-group">
                <label htmlfor="message">Message</label>
                <textarea
                  type="text"
                  id="user_message"
                  name="user_message"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="submit-button" type="submit" value="Send" onClick={sendEmail}>
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
export default Contact;
