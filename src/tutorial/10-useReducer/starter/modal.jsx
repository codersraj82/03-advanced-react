import React from "react";

const Modal = (props) => {
  const message = props.message;
  const NameClass = props.alertClass;
  return (
    <>
      <h3 className={NameClass}>{message}</h3>
    </>
  );
};

export default Modal;
