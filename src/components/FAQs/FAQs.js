import React from "react";
import classes from "./FAQs.module.scss";
import { FaqData } from "../../data";
import FAQ from "./FAQ";

const FAQs = () => {
  const faqContent = FaqData.map((item) => (
    <FAQ key={item.id} question={item.question} answer={item.answer} />
  ));
  return (
    <div className={classes.faqs} id="faqs">
      <h2>Frequently Asked Questions</h2>
      <ul className={classes["faqs__list"]}>{faqContent}</ul>
    </div>
  );
};

export default FAQs;
