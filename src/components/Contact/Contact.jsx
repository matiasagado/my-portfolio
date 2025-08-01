import "./Contact.css";

function Contact() {
  const socialLinks = [
    {
      name: "Github",
      icon: "fab fa-github",
      link: "https://github.com/matiasagado",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://linkedin.com/in/matiasagado",
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
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm currenlty looking for new opportunities. Whether you have a
            question or want to get in touch, I'll try my best to get back to
            you.
          </p>
        </div>
        <div className="contact-form-container">
          <div className="form-success">
            <h3>Thank You!</h3>
            <p>
              Your message have been successfully sent! I will get back to you
              soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
