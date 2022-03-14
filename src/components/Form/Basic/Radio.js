import React from "react";
import Input from "./Input";
import { BsXCircle } from "react-icons/bs";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function Radio(props) {
  return (
    <div
      key={props.key}
      className={` flex justify-start items-start ${props.divClassName}`}
    >
      <input
        {...props}
        className={`m-0 mx-2 self-center text-red-500 focus:ring-red-500/0 ${props.className}`}
        type="radio"
      />
      <Input
        placeholder="Enter Option"
        className={`p-2 text-slate-600 rounded-t-md focus:bg-slate-200/40 self-center ${props.inputClassName}`}
        value={props.label}
        onChange={props.onChangeLabel}
      />

      <button className={`self-center`} onClick={props.DeleteButton}>
        <BsXCircle
          className={`text-red-500 text-lg mx-2 hover:bg-red-600/20 rounded-full`}
        />
      </button>
    </div>
  );
}

Radio.propTypes = {
  key: PropTypes.any,
  label: PropTypes.string,
  onChangeLabel: PropTypes.func,
  DeleteButton: PropTypes.func,
  divClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  className: PropTypes.string,
};

export default Radio;
