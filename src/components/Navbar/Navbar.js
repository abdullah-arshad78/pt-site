import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo_transparent.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo--img" src={logo} alt="logo" />
      </div>
      {props.windowWidth < 900 && (
        <button className="navbar__btn" onClick={props.onToggleNavigation}>
          {props.showMobileNavigation ? (
            <VscChromeClose className="navbar__icon" />
          ) : (
            <GiHamburgerMenu className="navbar__icon" />
          )}
        </button>
      )}
      {props.windowWidth > 900 && (
        <ul className="nav-list">
          <li className="nav-list--item">
            <a href="#about">About</a>
          </li>
          <li className="nav-list--item">
            <a href="#services">Services</a>
          </li>
          <li className="nav-list--item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-list--item">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-list--item">
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
