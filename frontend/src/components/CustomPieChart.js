// src/components/CustomPieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const CustomPieChart = ({ data }) => {
  return <Pie data={data} />;
};

export default CustomPieChart;
