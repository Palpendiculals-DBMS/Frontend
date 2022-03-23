import React from "react";
import PropTypes from "prop-types";
/**
 *  @param {object} props
 * @return {React.Component}
 */
function DSection(props) {
  return (
    <div className="flex flex-col p-4 gap-3">
      <h1 className="text-2xl opacity-70">{props.data.title}</h1>
      <div className="text-slate-800/60 text-sm">{props.data.description}</div>
    </div>
  );
}

DSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DSection;
