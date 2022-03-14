import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function Modal(props) {
  return (
    <div
      className={`fixed h-full w-full top-0 left-0 flex flex-col justify-center items-center transition-all `}
      style={{
        pointerEvents: props.isOpen ? "all" : "none",
        opacity: props.isOpen ? 1 : 0,
      }}
    >
      <div
        className={` p-5 bg-white rounded transition-all ${props.className}`}
        style={{
          zIndex: "999",
        }}
      >
        {props.children}
      </div>
      <div
        className={`absolute w-full h-full bg-black z-50 opacity-40`}
        onClick={props.toggle}
      />
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Modal;
