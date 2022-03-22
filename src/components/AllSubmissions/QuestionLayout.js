import React from "react";
import LongText from "./SubComponents/Text";
import PropTypes from "prop-types";
import Radio from "./SubComponents/Radio";
import Checkbox from "./SubComponents/Checkbox";

/**
 * @param {*} props
 * @return {JSX.Element}
 */
function QuestionLayout(props) {
  switch (props.question?.type) {
    case "number":
    case "date":
    case "shorttext":
    case "longtext":
      return <LongText question={props.question} />;

    case "radio":
      return <Radio question={props.question} />;

    case "checkbox":
      return <Checkbox question={props.question} />;
  }
  return <div></div>;
}

QuestionLayout.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionLayout;
