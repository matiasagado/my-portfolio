import { useState } from "react";
import "./Contact.css";

function Contact() {
  const one = (
    <p>
      Whether you have a question or just want to connect, I'll try my best to
      get back to you!
    </p>
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div className="section-title">Contact Me</div>
      </div>
      <div className="contact-container">
        <h3>Get In Touch</h3>
        {one}
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
