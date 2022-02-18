import React from "react";
import ShortText from "./ShortText";
import LongText from "./LongText";

function TypeHandler({ question, index }) {
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
      break;
    default:
      break;
  }

  return <></>;
}

export default TypeHandler;
