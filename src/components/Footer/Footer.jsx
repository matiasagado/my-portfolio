import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="section" id="footer">
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Matias Agado. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Footer;
