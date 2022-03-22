import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnalyticsContext } from "../../Analytics/Analytics";

/**
 * @param {*} props
 * @return {JSX.Element}
 */
function LongText(props) {
  const { analyticsState } = React.useContext(AnalyticsContext);
  const [Question] = useState(props.question);

  const [submissions] = useState(analyticsState.analyticsState?.submissions);

  useEffect(() => {
    console.log(submissions);
    console.log(Question.id);
  }, []);

  return (
    <div className="w-full bg-slate-200 p-4 rounded-md">
      <div className="py-4 px-5">
        <h1>Q. {Question.title}</h1>
        <p className="text-xs py-2 text-slate-400">{Question.type}</p>
      </div>
      <div className="w-full text-md flex flex-col gap-3">
        {submissions?.map((item, index) => {
          if (item[`Q_${Question.id}`]) {
            return (
              <div
                key={index}
                className="p-2 bg-white hover:shadow-xl transition-all"
              >
                {item[`Q_${Question.id}`]}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

LongText.propTypes = {
  question: PropTypes.object.isRequired,
};

export default LongText;
