import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content--navigation">
          <a className="footer__content--nav-link" href="#about">
            ABOUT
          </a>
          <a className="footer__content--nav-link" href="#services">
            SERVICES
          </a>
          <a className="footer__content--nav-link" href="#testimonials">
            TESTIMONIALS
          </a>
          <a className="footer__content--nav-link" href="#contact">
            CONTACT
          </a>
          <a className="footer__content--nav-link" href="#faqs">
            FAQs
          </a>
        </div>
        <div className="footer__content--contact-icons">
          <a
            href="https://github.com/abdullah-arshad78"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__content--contact-link"
          >
            <AiFillGithub className="footer__icon" />
          </a>
          <a
            href="https://www.instagram.com/abdulla.arh/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__content--contact-link"
          >
            <AiFillInstagram className="footer__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-arshad-3a739b22b/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__content--contact-link"
          >
            <AiFillLinkedin className="footer__icon" />
          </a>
        </div>
      </div>
      <p className="footer__copyright">&copy; Copyright Abdullah Arshad 2022</p>
    </div>
  );
};

export default Footer;
