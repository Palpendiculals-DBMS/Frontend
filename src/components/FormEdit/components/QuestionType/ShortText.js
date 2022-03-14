import React, { useState, useEffect } from "react";

import Input from "../../../Form/Basic/Input";
import { FormEditContext } from "../../../../pages/form/FormEdit";
import QuestionLayout from "../QuestionLayout";
import PropType from "prop-types";

/**
 * @param {*} param0
 * @return {React.Component}
 */
function ShortText({ question, index, isDragging }) {
  const { formDataActions } = React.useContext(FormEditContext);
  const [QuestionState, setQuestionState] = useState(question);

  useEffect(() => {
    if (QuestionState !== formDataActions.getElementbyId(QuestionState.id)) {
      formDataActions.updateFormData(QuestionState, QuestionState.id);
    }
  }, [QuestionState]);

  useEffect(() => {
    setQuestionState(question);
  }, [question]);

  const handleChange = (e, type) => {
    setQuestionState({
      ...QuestionState,
      [type]: e.target.value,
    });
  };

  const toggleQuestion = e => {
    setQuestionState({
      ...QuestionState,
      isRequired: !QuestionState.isRequired,
    });
  };

  const deleteQuestion = () => {
    console.log("Deleting", QuestionState.id);
    formDataActions.deleteQuestion(QuestionState.id);
  };

  return (
    <React.Fragment>
      <QuestionLayout
        className={`flex flex-col p-3 border-2 rounded-md border-dotted`}
        QuestionState={QuestionState}
        toggleQuestion={toggleQuestion}
        DeleteQuestion={deleteQuestion}
        isDragging={isDragging}
      >
        <Input
          type="text"
          className={`w-full p-3 text-xl`}
          placeholder="Enter Question Title"
          value={
            QuestionState.title === null ? "Question" : QuestionState.title
          }
          onChange={e => handleChange(e, "title")}
        />

        <Input
          type="text"
          placeholder="Enter Responses"
          className={`my-3 mx-4 p-3 border-2 rounded-md bg-gray-400/10`}
        />
      </QuestionLayout>
    </React.Fragment>
  );
}

ShortText.propTypes = {
  question: PropType.object,
  index: PropType.number,
  isDragging: PropType.bool,
};

export default ShortText;
