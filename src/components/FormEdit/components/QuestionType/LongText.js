import React, { useState, useEffect } from "react";

import Input from "../Basic/Input";
// import Switch from "react-input-switch";
import { FormEditContext } from "../../../../pages/form/FormEdit";
// import { AiFillDelete } from "react-icons/ai";
import QuestionLayout from "../QuestionLayout";
import Textarea from "../Basic/Textarea";

function LongText({ question, index }) {
  const { formDataActions } = React.useContext(FormEditContext);
  const [QuestionState, setQuestionState] = useState(question);

  useEffect(() => {
    formDataActions.UpdateFormData(QuestionState, index);
  }, [QuestionState, formDataActions, index]);

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

  return (
    <React.Fragment>
      <QuestionLayout
        className={`flex flex-col p-3 my-4 w-3/4 p-3 border-2 rounded-md border-dotted`}
        QuestionState={QuestionState}
        toggleQuestion={toggleQuestion}
      >
        <Input
          type="text"
          className={`w-full p-3 text-xl`}
          placeholder="Enter Question Title"
          value={QuestionState.title}
          onChange={(e) => handleChange(e, "title")}
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

export default LongText;
