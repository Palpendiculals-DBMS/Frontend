import React from "react";
import ShortText from "./ShortText";
import LongText from "./LongText";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Date from "./Date";
import Number from "./Number";
import PropTypes from "prop-types";

const Print = ({ question, index }) => {
  switch (question.type) {
    case "shorttext":
      return (
        <React.Fragment>
          <ShortText question={question} index={index} />
        </React.Fragment>
      );
    case "longtext":
      return (
        <React.Fragment>
          <LongText question={question} index={index} />
        </React.Fragment>
      );
    case "number":
      return (
        <React.Fragment>
          <Number question={question} index={index} />
        </React.Fragment>
      );
    case "radio":
      return (
        <React.Fragment>
          <Radio question={question} index={index} />
        </React.Fragment>
      );
    case "checkbox":
      return (
        <React.Fragment>
          <Checkbox question={question} index={index} />
        </React.Fragment>
      );
    case "date":
      return (
        <React.Fragment>
          <Date question={question} index={index} />
        </React.Fragment>
      );
    default:
      break;
  }

  return <></>;
};

Print.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
};

/**
 *
 * @param {*} param0
 * @return {React.Component}
 */
function TypeHandler({ question, index }) {
  // const [QuestionState, setQuestionState] = useState(question);

  // useEffect(() => {
  //   console.log("Question", question, index);
  //   setQuestionState(question);
  // }, [question, index]);

  return (
    <>
      <Print question={question} index={index} />
    </>
  );
}

TypeHandler.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TypeHandler;
