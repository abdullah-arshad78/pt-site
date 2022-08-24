import React from "react";
import "./MobileNavigation.scss";

const MobileNavigation = ({ onCloseNavigation }) => {
  return (
    <ul className="mobile-navigation">
      <li className="mobile-navigation__item">
        <a
          href="#about"
          className="mobile-navigation__link"
          onClick={onCloseNavigation}
        >
          about
        </a>
      </li>
      <li className="mobile-navigation__item">
        <a
          href="#services"
          className="mobile-navigation__link"
          onClick={onCloseNavigation}
        >
          services
        </a>
      </li>
      <li className="mobile-navigation__item">
        <a
          href="#testimonials"
          className="mobile-navigation__link"
          onClick={onCloseNavigation}
        >
          testimonials
        </a>
      </li>
      <li className="mobile-navigation__item">
        <a
          href="#contact"
          className="mobile-navigation__link"
          onClick={onCloseNavigation}
        >
          contact
        </a>
      </li>
      <li className="mobile-navigation__item">
        <a
          href="#faqs"
          className="mobile-navigation__link"
          onClick={onCloseNavigation}
        >
          faqs
        </a>
      </li>
    </ul>
  );
};

export default MobileNavigation;
