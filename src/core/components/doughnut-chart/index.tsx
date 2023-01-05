import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio:false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        pointStyleWidth: 10,
        boxHeight: 8,
      },
    },
  },
};

export const data = {
  labels: ["Shoes", "Electronics", "Shirts"],
  responsive: true,
  datasets: [
    {
      label: "Sales Categories",
      data: [12, 15, 19],
      backgroundColor: ["#F01010", "#F7A9A0", "rgba(255, 99, 99, 0.9)"],
      borderWidth: 1,
      responsive: true,
      cutout: 80,
    },
  ],
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
