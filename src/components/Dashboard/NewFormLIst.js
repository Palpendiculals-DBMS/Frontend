import React from "react";
import BlankModal from "./BlankModal";
import PropTypes from "prop-types";

/**
 * @param {Object} props
 * @return {JSX.Element}
 */
function NewFormList(props) {
  return (
    <div className={`w-full bg-gray-100 md:px-32 md:py-5 font-body`}>
      <div className={`container`}>
        <h4>Start a new form</h4>
        <div className={`flex py-5`}>
          <div className="border-r pr-7 border-red-500">
            <BlankModal
              label="Blank"
              className="cursor-pointer"
              onClick={props.createForm}
            />
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}

NewFormList.propTypes = {
  createForm: PropTypes.func.isRequired,
};

export default NewFormList;
