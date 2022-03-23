import React from "react";
import Analytics from "../../../components/Analytics/Analytics";
import { useParams, useHistory } from "react-router";

const FormAnalytics = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <div className={`w-full bg-gray-100 min-h-screen font-body`}>
      <div className={`w-full md:px-32 md:py-5 font-body`}>
        <div className={`flex flex-row mt-5 font-body`}>
          <div
            className={`text-red-500 mr-5 font-semibold hover:bg-red-200/50 py-1 px-2 rounded cursor-pointer`}
            onClick={() => history.push(`/form/edit/${id}`)}
          >
            Edit Form
          </div>
          <div
            className={`text-red-500 mr-5 font-semibold bg-red-200/50 py-1 px-2 rounded cursor-pointer`}
            onClick={() => history.push(`/form/analytics/${id}`)}
          >
            Show Analytics
          </div>
        </div>
      </div>
      <div className={`mx-20 shadow-lg p-7 bg-white`}>
        <Analytics />
      </div>
    </div>
  );
};

export default FormAnalytics;
