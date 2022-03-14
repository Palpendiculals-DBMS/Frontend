import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import vectorSvg from "./BlankPageIcon.svg";
import PropTypes from "prop-types";

const BlankModal = props => {
  return (
    <Fragment>
      <div {...props} className={`${classes.BlankModal} ${props.className}`}>
        <div className={classes.plusDiv}>
          <img src={vectorSvg} alt="Vector Plus" />
        </div>
      </div>
    </Fragment>
  );
};

BlankModal.propTypes = {
  className: PropTypes.string,
};

export default BlankModal;
