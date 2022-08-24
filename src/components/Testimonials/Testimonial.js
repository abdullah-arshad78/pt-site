import React from "react";
import "./Testimonial.scss";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <div className="testimonial__image-container">
        <img src={props.image} alt={props.imageDescription} />
      </div>
      <div className="testimonial__content">
        <blockquote className="testimonial__text">{props.text}</blockquote>
        <span className="testimonial__name">- {props.name}</span>
      </div>
    </div>
  );
};

export default Testimonial;
