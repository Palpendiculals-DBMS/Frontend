import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function QuestionLayout(props) {
  return (
    <div
      className={`flex flex-col p-6 w-3/4 bg-white border-2 rounded-md border-red-400/30`}
    >
      {props.children}
    </div>
  );
}

QuestionLayout.propTypes = {
  children: PropTypes.any,
};

export default QuestionLayout;
