import React, { useState, useEffect, useMemo } from "react";

import Input from "../../../Form/Basic/Input";
import { FormEditContext } from "../../../../pages/form/FormEdit";
import QuestionLayout from "../QuestionLayout";

function Number({ question, index, isDragging }) {
  const { formData, formDataActions } = React.useContext(FormEditContext);
  const [QuestionState, setQuestionState] = useState(question);

  useEffect(() => {
    if (QuestionState !== formDataActions.getElementbyId(QuestionState.id))
      formDataActions.UpdateFormData(QuestionState, QuestionState.id);
  }, [QuestionState]);

  // const memoizedValue = useMemo(() => {
  //     formDataActions.UpdateFormData(QuestionState, QuestionState.id);
  // }, [QuestionState]);

  useEffect(() => {
    setQuestionState(question);
  }, [question]);

  const handleChange = (e, type) => {
    setQuestionState({
      ...QuestionState,
      [type]: e.target.value,
    });
  };

  const toggleQuestion = (e) => {
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
          onChange={(e) => handleChange(e, "title")}
        />

        <Input
          type="number"
          placeholder="Response"
          className={`my-3 mx-4 p-3 border-2 rounded-md bg-gray-400/10`}
        />

        <div className="flex justify-between flex-row">
          <Input
            type="number"
            placeholder="Min"
            max={QuestionState.max ? QuestionState.max : null}
            value={QuestionState.min ? QuestionState.min : null}
            onChange={(e) => handleChange(e, "min")}
            className={`my-3 mx-4 p-3 border-2 w-2/5 rounded-md bg-gray-400/10`}
          />
          <Input
            type="number"
            placeholder="Max"
            min={QuestionState.min ? QuestionState.min : null}
            className={`my-3 mx-4 p-3 border-2 w-2/5 rounded-md bg-gray-400/10`}
            value={QuestionState.max ? QuestionState.max : null}
            onChange={(e) => handleChange(e, "max")}
          />
        </div>
      </QuestionLayout>
    </React.Fragment>
  );
}

export default Number;
