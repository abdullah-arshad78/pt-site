import React, { useState } from "react";
import { ImCircleDown } from "react-icons/im";
import classes from "./FAQ.module.scss";
const FAQ = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleShowAnswer = () => {
    setShowAnswer((prevState) => !prevState);
  };
  return (
    <li className={classes.faq}>
      <div className={classes["faq__content"]}>
        <p className={classes["faq__question"]}>{props.question}</p>
        <button className={classes["faq__button"]} onClick={toggleShowAnswer}>
          <ImCircleDown
            className={`${classes["faq__icon"]} ${
              showAnswer && classes.rotate
            }`}
          />
        </button>
      </div>
      {showAnswer && (
        <div className={classes["faq__answer"]}>{props.answer}</div>
      )}
    </li>
  );
};

export default FAQ;
