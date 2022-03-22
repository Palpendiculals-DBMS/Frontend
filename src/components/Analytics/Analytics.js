import React, { useEffect, createContext } from "react";
import useAnalytics from "./Hooks/useAnalytics";
import { useParams } from "react-router";
import AllSubmissions from "../AllSubmissions/allSubmissions";
export const AnalyticsContext = createContext(null);

/**
 *
 * @return {JSX.Element}
 */
function Analytics() {
  const [analyticsState, { loadAnalytics, setView }] = useAnalytics([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadAnalytics(id);
    }
  }, [id]);

  useEffect(() => {
    console.log("analyticsState", analyticsState.analyticsState);
  }, [analyticsState]);

  return (
    <AnalyticsContext.Provider
      value={{ analyticsState, loadAnalytics, setView }}
    >
      <div className={``}>
        <div>
          <h1 className={`text-lg text-slate-400`}>
            {analyticsState.analyticsState?.submissions?.length} Responses
          </h1>
          <AllSubmissions />
        </div>
      </div>
    </AnalyticsContext.Provider>
  );
}

export default Analytics;
