import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Backdrop.scss";

const portalEL = document.getElementById("overlays");

const BackdropContainer = (props) => {
  return <div onClick={props.onCloseModal} className="backdrop"></div>;
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropContainer onCloseModal={props.onCloseModal} />,
        portalEL
      )}
    </Fragment>
  );
};

export default Modal;
