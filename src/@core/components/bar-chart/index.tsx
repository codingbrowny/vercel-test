import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartLabels } from "../../utils/data";
import { ChartOptions } from "../../utils/chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**Chart Options */
const extraOptions = {
  plugins: {...ChartOptions.plugins, title: { display: true, text: "Total Orders" } },
  scales: {
    ...ChartOptions.scales,
    xAxes: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
}

const options = {...ChartOptions, ...extraOptions}

// Chart Data
const data = {
  labels: ChartLabels,
  datasets: [
    {
      label: "This Month",
      data: [43, 80, 86, 105, 65, 113, 98, 45, 69, 120, 101, 82],
      backgroundColor: "#FF6363",
    },
    {
      label: "Last Month",
      data: [82, 109, 68, 45, 72, 93, 68, 105, 96, 100, 121, 42],
      backgroundColor: "rgba(255, 99, 99, 0.4)",
    },
  ],
};

/** Bar Chart Component */
const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
