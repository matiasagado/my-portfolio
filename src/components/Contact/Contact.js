import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {};

  const socialLinks = [
    {
      name: "GitHub",
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
      url: "https://twitter.com/",
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
        <span className="section-title">Contact Me</span>
      </div>
      <div className={`contact-container ${isVisible ? "visible" : ""}`}>
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className={link.icon}></i>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <h3>Thank you!</h3>
              <p>
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formError && <div className="form-error">{formError}</div>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
