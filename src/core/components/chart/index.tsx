import { ChartOptions } from "chart.js";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
// import { ChartDataType } from "../../../types";

interface ChartInterface {
  /** Type of the chart to use.
   ** Ex: "line", "bar", etc
   ** Refer React-Charts and ChartJS for the various types
   *8 [NOTRE](https://www.codingbrowny.xyz)
   */
  type: string;
  /**The Chart Options to use for the chart */
  options: ChartOptions;
}

type Props = ChartInterface & any;

/**Chart Options */

/** Chart Component */
const DataChart = ({ type, data, options }: Props) => {
  if (type === "line") {
    return <Line data={data} options={options} />;
  } else {
    return <Bar data={data} options={options} />;
  }
};

export default DataChart;
