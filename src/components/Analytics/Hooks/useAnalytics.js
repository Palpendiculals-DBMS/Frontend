import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const initialState = {
  form: {},
  isLoading: true,
  submissions: [],
};

/**
 *
 * @param {*} analytics
 * @return {Object}
 */
export default function useAnalytics() {
  const [analyticsState, setAnalyticsState] = useState(initialState);
  const [formMap, setformMap] = useState({});
  const [view, setView] = useState("allsubmissions");
  const auth = useSelector(state => state.auth);

  console.log(auth);

  const loadAnalytics = async id => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/analytics/${id}`
      );
      console.log(res.data);

      setAnalyticsState({
        form: res.data.form,
        isLoading: false,
        submissions: res.data.submissions,
      });

      const form = res.data.form?.form;

      if (form) {
        const map = {};
        form.forEach((item, index) => {
          map[item.id] = item.type;
        });

        setformMap(map);
      }
    } catch (err) {
      throw err;
    }
  };

  return [
    {
      analyticsState,
      formMap,
      view,
    },
    {
      loadAnalytics,
      setView,
    },
  ];
}
