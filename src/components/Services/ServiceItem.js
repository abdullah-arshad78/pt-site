import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import Backdrop from "../../UI/Backdrop";
import ServiceModal from "./ServiceModal";
import "./ServiceItem.scss";

const ServiceItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const enableModalHandler = () => {
    setShowModal(true);
  };
  const disableModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="services__content">
      <img src={props.imageSource} alt={props.imageDescription} />
      <h4>{props.heading}</h4>
      <p>{props.serviceContent}</p>
      <button onClick={enableModalHandler}>
        Learn More <ImArrowRight2 className="arrow-icon" />
      </button>
      {showModal && <Backdrop onCloseModal={disableModalHandler} />}
      {showModal && (
        <ServiceModal
          onCloseModal={disableModalHandler}
          modalContent={props.modalContent}
        />
      )}
    </div>
  );
};

export default React.memo(ServiceItem);
