import React from "react";
import "./Services.scss";

import { serviceItems } from "../../data";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const serviceList = serviceItems.map((item) => (
    <ServiceItem
      key={item.id}
      imageSource={item.imgSource}
      imageDescription={item.imgDescription}
      heading={item.serviceHeading}
      serviceContent={item.serviceContent}
      modalContent={item.modalContent}
    />
  ));
  return (
    <div className="services" id="services">
      <div className="services__intro">
        <h3 className="services__intro--heading">What I Do</h3>
        <p className="services__intro--para">
          My coaching options have been designed from the ground up to put you
          and your goals first. From one-on-one training in your private studio,
          to my renowned small group personal training and bespoke nutrition
          packages- everything I offer has been battle-tested over a decade in
          the field, to ensure the results you achieve are not only impressive
          in the short term- but also sustainable for life.
        </p>
      </div>
      <div className="services__container">{serviceList}</div>
    </div>
  );
};

export default Services;
