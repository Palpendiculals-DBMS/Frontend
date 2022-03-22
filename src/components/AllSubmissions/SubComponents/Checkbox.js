import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar, Cell } from "recharts";
import { AnalyticsContext } from "../../Analytics/Analytics";
import PropTypes from "prop-types";

const colorArray = [
  "#FF6633",
  "#FF33FF",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

/**
 * @param {*} check
 * @return {object}
 */
function getCheckBoxData(check) {
  const result = [];
  const map = {};
  check.forEach(item => {
    const obj = item.split(",");
    obj.forEach(it => {
      if (typeof map[it] !== typeof undefined) {
        map[it] = map[it] + 1;
      } else {
        map[it] = 1;
      }
    });
  });

  Object.keys(map).forEach(obj => {
    result.push({
      name: obj,
      value: map[obj],
    });
  });

  return result;
}

/**
 *
 * @param {*} data
 * @param {*} id
 * @return {object}
 */
function getRadioData(data, id) {
  const obj = {};

  data.forEach(item => {
    if (typeof item[`Q_${id}`] != typeof undefined) {
      obj[item[`Q_${id}`]] =
        obj[item[`Q_${id}`]] !== undefined ? obj[item[`Q_${id}`]] + 1 : 1;
    }
  });

  return Object.keys(obj);
}

/**
 * @param {*} props
 * @return {JSX.Element}
 */
function Checkbox(props) {
  const { analyticsState } = React.useContext(AnalyticsContext);
  const [Question] = useState(props.question);
  const [Data, setData] = useState([]);
  const [submissions] = useState(analyticsState.analyticsState?.submissions);

  useEffect(() => {
    console.log(submissions);
    console.log(Question.id);

    const checkboxData = getRadioData(submissions, Question.id);
    console.log("CHECKBOX DATA", checkboxData);
    setData(getCheckBoxData(checkboxData));
  }, []);

  useEffect(() => {
    console.log(Data);
  }, [Data]);

  return (
    <div className="full bg-slate-200 p-4 rounded-md">
      <div className="py-4 px-5">
        <h1>Q. {Question.title}</h1>
        <p className="text-xs py-2 text-slate-400">{Question.type}</p>
      </div>

      <BarChart width={1000} height={450} data={Data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value">
          {Data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colorArray[index % colorArray.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

Checkbox.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Checkbox;
