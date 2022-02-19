import React, { useEffect, useState } from "react";
import ShortText from "./ShortText";
import LongText from "./LongText";
import Radio from "./Radio";

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
    case "radio":
      return (
        <React.Fragment>
          <Radio question={question} index={index} />
        </React.Fragment>
      );
    default:
      break;
  }

  return <></>;
}

function TypeHandler({ question, index }) {

  // const [QuestionState, setQuestionState] = useState(question);

  // useEffect(() => {
  //   console.log("Question", question, index);
  //   setQuestionState(question);
  // }, [question, index]);

  return <>
    <Print question={question} index={index} />
  </>;
}

export default TypeHandler;
