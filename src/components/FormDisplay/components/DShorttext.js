import React, { useEffect } from "react";
import DQuestionLayout from "../DQuestionLayout";
import { FormContext } from "../FormComponent";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function DShorttext(props) {
  const { register, errors } = React.useContext(FormContext);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  console.log(props.data);

  return (
    <DQuestionLayout>
      <h1 className={`my-2 text-lg`}>
        {props.data.title}
        {props.data.isRequired ? (
          <span className={`text-red-500 mx-1`}>*</span>
        ) : null}
      </h1>

      <input
        type="text"
        name={`Q_${props.data.id}`}
        {...register(`Q_${props.data.id}`, { required: props.data.isRequired })}
        placeholder="Enter Response"
        className={`w-full p-3 border-2 rounded-md bg-gray-100 active:border-gray-200 shadow-inner my-3 outline-none border-b font-body focus:shadow-none active:border-black/30 focus:border-black/30 focus:ring-0 border-gray-100`}
      />
      {props.data.isRequired && errors[`Q_${props.data.id}`] && (
        <p className={`text-red-500 text-xs italic`}>This field is required</p>
      )}
    </DQuestionLayout>
  );
}

DShorttext.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DShorttext;
