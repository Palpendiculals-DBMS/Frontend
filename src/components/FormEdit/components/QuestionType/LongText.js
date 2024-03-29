import React, { useState, useEffect } from "react";
import Input from "../../../Form/Basic/Input";
import { FormEditContext } from "../../../../pages/form/FormEdit";
import QuestionLayout from "../QuestionLayout";
import Textarea from "../../../Form/Basic/Textarea";
import PropType from "prop-types";

/**
 *
 * @param {*} param0
 * @return {React.Component}
 */
function LongText({ question, index }) {
  const { formDataActions } = React.useContext(FormEditContext);
  const [QuestionState, setQuestionState] = useState(question);

  useEffect(() => {
    formDataActions.updateFormData(QuestionState, QuestionState.id);
  }, [QuestionState]);

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
        DeleteQuestion={deleteQuestion}
        toggleQuestion={toggleQuestion}
      >
        <Input
          type="text"
          className={`w-full p-3 text-xl`}
          placeholder="Enter Question Title"
          value={QuestionState.title}
          onChange={e => handleChange(e, "title")}
        />

        <Textarea
          type="text"
          rows="6"
          placeholder="Enter Responses"
          className={`my-3 mx-4 p-3 border-2 rounded-md bg-gray-400/10`}
        ></Textarea>
      </QuestionLayout>
    </React.Fragment>
  );
}

LongText.propTypes = {
  question: PropType.object,
  index: PropType.number,
};

export default LongText;
