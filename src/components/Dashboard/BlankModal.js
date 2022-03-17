import React, { Fragment } from "react";
import vectorSvg from "./BlankPageIcon.svg";
import PropTypes from "prop-types";

const BlankModal = props => {
  return (
    <Fragment>
      <div {...props} className={`${props.className}`}>
        <div
          className={`px-10 py-7 shadow-md rounded-lg bg-white border border-white hover:border-red-500 transition-all duration-700 hover:bg-gray-50 `}
        >
          <img src={vectorSvg} className="w-10" alt="Vector Plus" />
        </div>
        <p className="p-2 text-xs text-red-500/50">{props.label}</p>
      </div>
    </Fragment>
  );
};

BlankModal.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default BlankModal;
