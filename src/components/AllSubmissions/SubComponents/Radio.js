import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnalyticsContext } from "../../Analytics/Analytics";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

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
 *
 * @param {*} data
 * @param {*} id
 * @return {object}
 */
function getRadioData(data, id) {
  const obj = {};
  const result = [];

  data.forEach(item => {
    if (typeof item[`Q_${id}`] != typeof undefined) {
      obj[item[`Q_${id}`]] =
        obj[item[`Q_${id}`]] !== undefined ? obj[item[`Q_${id}`]] + 1 : 1;
    }
  });
  console.log(Object.keys(obj));

  Object.keys(obj).forEach(item => {
    result.push({
      name: item,
      value: obj[item],
    });
  });

  return result;
}

/**
 * @param {*} props
 * @return {JSX.Element}
 */
function Radio(props) {
  const { analyticsState } = React.useContext(AnalyticsContext);
  const [Question] = useState(props.question);
  const [submissions] = useState(analyticsState.analyticsState?.submissions);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(submissions);
    console.log(Question.id);

    setData(getRadioData(submissions, Question.id));
    console.log(data);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="full bg-slate-200 p-4 rounded-md">
      <div className="py-4 px-5">
        <h1>Q. {Question.title}</h1>
        <p className="text-xs py-2 text-slate-400">{Question.type}</p>
      </div>
      <PieChart width={400} height={250}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={100}
          outerRadius={80}
          innerRadius={10}
          fill="#d6223a"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colorArray[index % colorArray.length]}
              className="text-center shadow-2xl"
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

Radio.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Radio;
