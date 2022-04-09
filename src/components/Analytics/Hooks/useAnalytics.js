/* eslint-disable guard-for-in */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";

const initialState = {
  form: {
    description: "",
    form: [],
    title: "",
  },
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
      console.log("Analytics Data : ", res.data);

      let submissions = res.data?.submissions;

      const form = res.data.form?.form;

      if (form) {
        const map = {};
        form.forEach((item, index) => {
          map[item.id] = item.type;
        });

        console.log("FORM MAP", map);

        submissions = submissions.map(item => {
          const newItem = { ...item };
          const keysList = Object.keys(item);
          console.log(keysList);

          keysList.forEach(key => {
            // console.log(key, map[]);
            if (map[key.replace("Q_", "")] === "date") {
              newItem[key] = dayjs(item[key]).format("MMM DD YYYY");
            }
          });

          return newItem;
        });

        setformMap(map);
      }

      console.log("Analytics Submissions : ", submissions);

      setAnalyticsState({
        form: res.data.form,
        isLoading: false,
        submissions: submissions,
      });
    } catch (err) {
      throw err;
    }
  };

  /**
   *
   * @param {*} objArray
   * @return {Array}
   */
  function convertToCSV(objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";

    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (const index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }

      str += line + "\r\n";
    }

    return str;
  }

  const generateCSV = () => {
    console.log(analyticsState.submissions);
    console.log(analyticsState.form);

    const forms = analyticsState.form.form;
    const submissions = analyticsState.submissions;

    const headers = forms.map(item => {
      return item.title;
    });

    const ids = forms.map(item => {
      return item.id;
    });

    const formsubmissions = submissions.map(item => {
      const obj = {};
      ids.forEach(id => {
        if (item[`Q_${id}`] !== undefined) {
          obj[`Q_${id}`] = item[`Q_${id}`].toString();
        }
      });
      return obj;
    });

    const csv = convertToCSV([headers, ...formsubmissions]);

    console.log(csv);

    const element = React.createElement(
      "a",
      {
        href: "data:text/csv;charset=utf-8," + csv,
        download: "data.csv",
        className: "text-sm bg-green-500 my-0 p-2 px-4 text-white rounded-md",
      },
      "Download CSV"
    );

    return element;
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
      generateCSV,
    },
  ];
}
