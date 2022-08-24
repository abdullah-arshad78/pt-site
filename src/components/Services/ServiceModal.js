import React from "react";
import "./ServiceModal.scss";

const ServiceModal = (props) => {
  const { heading, text } = props.modalContent;
  return (
    <div className="service-modal">
      <h2>{heading}</h2>
      <p className="service-modal-text">{text}</p>
      <button className="service-modal-btn" onClick={props.onCloseModal}>
        Ok, Got it!
      </button>
    </div>
  );
};

export default ServiceModal;
