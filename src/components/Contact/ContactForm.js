import React, { useRef, useReducer, useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";

const ACTIONS = {
  nameChange: "NAME_CHANGE",

  emailChange: "EMAIL_CHANGE",

  textChange: "TEXT_CHANGE",
};

const formErrors = {
  nameError: "Please add a valid name",
  emailError: "Your email should be contain character '@'",
  textError: "Please add a valid text (at least 8 characters long)",
};

const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.nameChange:
      return {
        ...state,
        nameVal: action.value,
        nameIsValid: nameRegex.test(action.value),
      };

    case ACTIONS.emailChange:
      return {
        ...state,
        emailVal: action.value,
        emailIsValid: emailRegex.test(action.value.trim()),
      };

    case ACTIONS.textChange:
      return {
        ...state,
        textVal: action.value,
        textIsValid: action.value.trim().length > 8,
      };

    case "default":
      return {
        nameVal: "",
        nameIsValid: undefined,
        emailVal: "",
        emailIsValid: undefined,
        textVal: "",
        textIsValid: undefined,
      };
    default:
      return { ...state };
  }
};

const ContactForm = (props) => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const initialFormStates = {
    nameVal: "",
    nameIsValid: undefined,
    emailVal: "",
    emailIsValid: undefined,
    textVal: "",
    textIsValid: undefined,
  };
  const [formState, disPatchFormAction] = useReducer(
    formReducer,
    initialFormStates
  );

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    setFormIsValid(
      formState.nameIsValid && formState.emailIsValid && formState.textIsValid
    );
  }, [formState.nameIsValid, formState.emailIsValid, formState.textIsValid]);

  const nameChangeHandler = (e) => {
    disPatchFormAction({ type: ACTIONS.nameChange, value: e.target.value });
  };
  const emailChangeHandler = (e) => {
    disPatchFormAction({ type: ACTIONS.emailChange, value: e.target.value });
  };
  const textChangeHandler = (e) => {
    disPatchFormAction({ type: ACTIONS.textChange, value: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      if (!formState.nameIsValid) {
        nameRef.current.focus();
      } else if (!formState.emailIsValid) {
        emailRef.current.focus();
      } else {
        textRef.current.focus();
      }

      return;
    }

    emailjs
      .sendForm(
        "service_h02f4qv",
        "template_puwpisg",
        form.current,
        "R7jAWGM_g9F_xoeGU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    props.onFormSuccess();
    disPatchFormAction({ type: "default" });
  };
  return (
    <form
      className={styles["contact-form"]}
      ref={form}
      onSubmit={sendEmail}
      noValidate
    >
      <div
        className={`${styles["contact-form__controls"]} ${
          formState.nameIsValid === false && styles["invalid"]
        }`}
      >
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={nameChangeHandler}
          value={formState.nameVal}
          ref={nameRef}
        />
        {formState.nameIsValid === false && <span>{formErrors.nameError}</span>}
      </div>
      <div
        className={`${styles["contact-form__controls"]} ${
          formState.emailIsValid === false && styles["invalid"]
        }`}
      >
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
          value={formState.emailVal}
          ref={emailRef}
        />
        {formState.emailIsValid === false && (
          <span>{formErrors.emailError}</span>
        )}
      </div>
      <div
        className={`${styles["contact-form__query"]} ${
          formState.textIsValid === false && styles["invalid"]
        }`}
      >
        <label htmlFor="text">Your Query</label>
        <textarea
          name="text"
          id="text"
          placeholder="Your Text . . ."
          onChange={textChangeHandler}
          value={formState.textVal}
          ref={textRef}
        ></textarea>
        {formState.textIsValid === false && <span>{formErrors.textError}</span>}
      </div>
      <button className={styles["contact-form__btn"]}>Submit</button>
    </form>
  );
};

export default ContactForm;
