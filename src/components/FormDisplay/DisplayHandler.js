import React from "react";
import DShorttext from "./components/DShorttext";
import DRadio from "./components/DRadio";
import LongText from "./components/DLongText";
import DDate from "./components/DDate";
import DNumber from "./components/DNumber";
import DCheckbox from "./components/DCheckbox";
import PropTypes from "prop-types";

/**
 *
 * @param {*} param0
 * @return {React.Component}
 */
function DisplayHandler({ question, index }) {
  switch (question.type) {
    case "shorttext":
      return (
        <React.Fragment>
          <DShorttext data={question} />
        </React.Fragment>
      );
    case "longtext":
      return (
        <React.Fragment>
          <LongText data={question} />
        </React.Fragment>
      );
    case "radio":
      return (
        <React.Fragment>
          <DRadio data={question} />
        </React.Fragment>
      );
    case "checkbox":
      return (
        <React.Fragment>
          <DCheckbox data={question} />
        </React.Fragment>
      );
    case "number":
      return (
        <React.Fragment>
          <DNumber data={question} />
        </React.Fragment>
      );
    case "date":
      return (
        <React.Fragment>
          <DDate data={question} />
        </React.Fragment>
      );
    default:
      break;
  }

  return <></>;
}

DisplayHandler.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
};

export default DisplayHandler;
