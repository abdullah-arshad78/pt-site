import React from "react";
import styles from "./About.module.scss";
import JackPersonal from "../../assets/Jack-3-lg.jpg";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles["about--image"]}>
        <img src={JackPersonal} alt="Jack helping his client" />
      </div>
      <div className={styles["about--content"]}>
        <h3 className={styles["about--heading"]}>About Me</h3>
        <p className={styles["about--description"]}>
          I work with men and women that have let fitness slide down their list
          of priorities, and want to make a significant positive change. I'll
          guide you through our proven system of creating a healthier, happier
          and more confident version of yourself in the next 6 weeks- without
          boring workouts, or fad diets.
          <br />
          I believe fitness should enhance your life, rather than take away from
          it- every strategy starts with an in-depth look at where you currently
          are, and creates an achievable path to where you want to be.
          <br />​ Whether that's ditching the mid-afternoon energy slump so you
          can be active with your kids after school, banishing the expanding
          midsection that's making it harder to slide into your work trousers
          each passing year, or finally having the body confidence to buy
          clothes that show off your physique, rather than hide it. In just 42
          days we'll take you from feeling frustrated with your current
          trajectory, to feeling proud of the positive habits you've built.
        </p>
      </div>
    </div>
  );
};

export default About;
