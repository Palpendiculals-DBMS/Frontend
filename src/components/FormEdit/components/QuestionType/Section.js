import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuestionLayout from "../QuestionLayout";
import { FormEditContext } from "../../../../pages/form/FormEdit";
import Input from "../../../Form/Basic/Input";
import Textarea from "../../../Form/Basic/Textarea";

/**
 * @param {*} props
 * @return {JSX.Element}
 */
function Section({ question, index }) {
  const { formDataActions } = React.useContext(FormEditContext);
  const [QuestionState, setQuestionState] = useState(question);

  useEffect(() => {
    formDataActions.updateFormData(QuestionState, QuestionState.id);
  }, [QuestionState]);

  useEffect(() => {
    setQuestionState(question);
  }, [question]);

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

  const handleChange = (e, type) => {
    setQuestionState({
      ...QuestionState,
      [type]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <QuestionLayout
        className={`flex flex-col p-3 border-2 rounded-md border-dotted`}
        QuestionState={QuestionState}
        toggleQuestion={toggleQuestion}
        DeleteQuestion={deleteQuestion}
        noReq={true}
      >
        <div className="flex flex-col gap-0">
          <Input
            type="text"
            className={`my-3 mx-4 p-3 border-2 rounded-md bg-gray-400/10`}
            placeholder="Enter Question Title"
            value={QuestionState.title}
            onChange={e => handleChange(e, "title")}
          />

          <Textarea
            className={`my-3 mx-4 p-3 border-2 rounded-md bg-gray-400/10`}
            placeholder="Enter Question Description"
            value={QuestionState.description}
            onChange={e => handleChange(e, "description")}
          />
        </div>
      </QuestionLayout>
    </React.Fragment>
  );
}

Section.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
};

export default Section;
