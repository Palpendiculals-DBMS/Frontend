import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`${props.className} outline-none border-b font-body border-gray-200 focus:border-black/30 focus:ring-0 border-0`}
    >
      {props.children}
    </textarea>
  );
}

Textarea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Textarea;
