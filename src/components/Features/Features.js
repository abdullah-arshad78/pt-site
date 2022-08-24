import React from "react";
import "./Features.scss";
import MpLogo from "../../assets/pngwing.com.png";
import GSLogo from "../../assets/pngwing.com (1).png";
import SWLogo from "../../assets/pngwing.com (2) (1).png";
import BILogo from "../../assets/pngwing.com (3) (1).png";

const Features = () => {
  return (
    <div className="features">
      <h2 className="features--heading">Also Featured In</h2>
      <div className="features--logos">
        <img className="features--img" src={MpLogo} alt="my protein" />
        <img className="features--img" src={GSLogo} alt="sym shark" />
        <img className="features--img" src={SWLogo} alt="slimming world" />
        <img className="features--img" src={BILogo} alt="business insider" />
      </div>
    </div>
  );
};
export default Features;
