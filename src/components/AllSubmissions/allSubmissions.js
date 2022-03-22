import React from "react";
import QuestionLayout from "./QuestionLayout";
import { AnalyticsContext } from "../Analytics/Analytics";

/**
 *
 * @return {JSX.Element}
 */
function AllSubmissions() {
  const { analyticsState } = React.useContext(AnalyticsContext);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {analyticsState.analyticsState?.form?.form?.map((item, index) => {
          return (
            <div key={index}>
              <QuestionLayout question={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllSubmissions;
