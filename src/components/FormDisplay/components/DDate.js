import React from "react";
import DQuestionLayout from "../DQuestionLayout";
import { FormContext } from "../FormComponent";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function DDate(props) {
  const { register, errors } = React.useContext(FormContext);
  return (
    <DQuestionLayout>
      <h1 className={`my-2 text-lg`}>{props.data.title}</h1>

      <input
        type="date"
        {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
        className={`my-3 mx-4 p-3 rounded-md bg-gray-400/10 outline-none border-b font-body border-gray-200 focus:border-black/30 focus:ring-0 border-0`}
      />
      {props.data.isRequired && errors[`Q_${props.data.id}`] && (
        <p className={`text-red-500 text-xs italic`}>This field is required</p>
      )}
    </DQuestionLayout>
  );
}

DDate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DDate;
