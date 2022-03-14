import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <input
      {...props}
      className={`${props.className} form-input outline-none border-0 border-b font-body focus:shadow-none active:border-black/30 focus:border-black/30 focus:ring-0 border-gray-100`}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
