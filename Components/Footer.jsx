import React from "react";
import footerStyles from "../styles/Navbar.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        Made with <span className={footerStyles.heart}>❤️</span> by{" "}
        <a
          href="https://www.linkedin.com/in/ahsanbilal7"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.linkedinLink}
        >
          Ahsan 
        </a>
      </p>
    </footer>
  );
};

export default Footer;
