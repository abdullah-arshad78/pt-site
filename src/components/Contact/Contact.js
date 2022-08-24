import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactFormSucessModal from "./ContactFormSucessModal";
import Backdrop from "../../UI/Backdrop";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [formSucess, setFormSuccess] = useState(false);

  const formSucessHandler = () => {
    setFormSuccess(true);
  };
  const formFailureHandler = () => {
    setFormSuccess(false);
  };
  return (
    <div className={styles["contact"]} id="contact">
      <h2 className={styles["contact__heading"]}>Contact Me</h2>
      <div className={styles["contact__content"]}>
        <ContactForm onFormSuccess={formSucessHandler} />
      </div>
      {formSucess && <Backdrop onCloseModal={formFailureHandler} />}
      {formSucess && (
        <ContactFormSucessModal onCloseModal={formFailureHandler} />
      )}
    </div>
  );
};

export default Contact;
