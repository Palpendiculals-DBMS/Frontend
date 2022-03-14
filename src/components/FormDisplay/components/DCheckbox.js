import React from "react";
import DQuestionLayout from "../DQuestionLayout";
import { FormContext } from "../FormComponent";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function DCheckbox(props) {
  const { register } = React.useContext(FormContext);
  return (
    <DQuestionLayout>
      <h1 className={`my-2 text-lg`}>{props.data.title}</h1>

      <div className={`w-full p-2`}>
        {props.data.options.map((option, index) => {
          return (
            <div key={index}>
              <input
                className={`m-0 mx-2 self-center text-red-500 rounded-sm outline-none focus:ring-red-500/0 ${props.className}`}
                type="checkbox"
                name={`Q_${props.data.id}`}
                value={option}
                {...register(`Q_${props.data.id}`, {
                  required: props.data.isRequired,
                })}
              />
              <span className={`opacity-50`}>{option}</span>
            </div>
          );
        })}
      </div>
    </DQuestionLayout>
  );
}

DCheckbox.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default DCheckbox;
