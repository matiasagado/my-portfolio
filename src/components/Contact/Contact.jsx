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
    </section>
  );
}
export default Contact;
