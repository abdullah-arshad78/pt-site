import React from "react";
import "./ContactFormSuccessModal.scss";

const ContactFormSucessModal = (props) => {
  return (
    <div className="form-success-modal">
      <button onClick={props.onCloseModal}>&times;</button>
      <h2>Form Submission Was A Success</h2>
      <p>
        Thank you for reaching out. I will be in touch with you within 3-5
        working days
      </p>
    </div>
  );
};

export default ContactFormSucessModal;
