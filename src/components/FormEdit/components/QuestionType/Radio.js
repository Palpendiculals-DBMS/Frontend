import React, { useState, useEffect } from "react";
import Input from "../../../Form/Basic/Input";
import { FormEditContext } from "../../../../pages/form/FormEdit";
import { BsFillPlusSquareFill } from "react-icons/bs";
import PropType from "prop-types";
import QuestionLayout from "../QuestionLayout";
import RadioInput from "../../../Form/Basic/Radio";

/**
 *
 * @param {*} param0
 * @return {React.Component}
 */
function Radio({ question, index }) {
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

  const handleChangeLabel = (e, index) => {
    setQuestionState(prevState => {
      const newState = [...prevState.options];
      newState[index] = e.target.value;
      return {
        ...prevState,
        options: newState,
      };
    });
  };

  const toggleQuestion = e => {
    setQuestionState({
      ...QuestionState,
      isRequired: !QuestionState.isRequired,
    });
  };

  const addNewOption = () => {
    setQuestionState(prevState => {
      const newState = [...prevState.options];
      newState.push({
        title: "Untitled Option",
        checked: false,
      });
      return {
        ...prevState,
        options: newState,
      };
    });
  };

  const deleteOption = index => {
    setQuestionState(prevState => {
      const newState = [...prevState.options];
      newState.splice(index, 1);
      return {
        ...prevState,
        options: newState,
      };
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
      >
        <Input
          type="text"
          className={`w-full p-3 text-xl`}
          placeholder="Enter Question Title"
          value={QuestionState.title}
          onChange={e => handleChange(e, "title")}
        />

        <div className={`flex flex-col py-4`}>
          {QuestionState.options.map((option, index) => {
            return (
              <>
                <RadioInput
                  key={index}
                  className={``}
                  divClassName={`px-3 py-2`}
                  name={`q_${question.id}`}
                  value={option}
                  label={option}
                  onChangeLabel={e => handleChangeLabel(e, index)}
                  DeleteButton={() => {
                    deleteOption(index);
                  }}
                />
              </>
            );
          })}
          <div className={`flex my-4`}>
            <button className={`mx-2 ml-4 text-lg `} onClick={addNewOption}>
              <BsFillPlusSquareFill
                className={`text-red-500 shadow-lg shadow-red-500/30 hover:text-red-800 transition-all`}
              />
            </button>
            <div className={`font-body opacity-50`}>Add New</div>
          </div>
        </div>
      </QuestionLayout>
    </React.Fragment>
  );
}

Radio.propTypes = {
  question: PropType.object,
  index: PropType.number,
};

export default Radio;
