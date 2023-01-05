import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartLabels } from "../../utils/data";
import { ChartOptions } from "../../utils/chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**CHart Options */
const customOptions = {
  plugins: {
    ...ChartOptions.plugins,
    title: {
      ...ChartOptions.plugins.title,
      text: "Total Sales"
    }
  }
}
const options = {...ChartOptions, ...customOptions}

const data = {
  labels: ChartLabels,
  datasets: [
    {
      label: "This Month",
      data: [43, 89, 86, 105, 75, 113, 98, 45, 69, 120, 101, 82],
      borderColor: "rgb(76, 175, 80)",
      backgroundColor: "rgb(76, 175, 80)",
    },
    {
      label: "Last Month",
      data: [82, 109, 68, 45, 72, 103, 98, 105, 96, 120, 121, 42],
      borderColor: "rgb(185, 252, 208)",
      backgroundColor: "rgb(185, 252, 208)",
    },
  ],
};

/**Line Chart */
const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
