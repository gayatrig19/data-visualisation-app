import React, { useMemo } from "react";
import { Chart } from "react-chartjs-2";
import {
  prepareDatasets,
  generateTimeLabels,
  chartOptions,
} from "../utils/chartdatautils";
import styles from "../App.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

// Component renders the chart with consumption and temperature data
const EnergyTemperatureGraph = ({ data }) => {
  const { consumption, temperature } = data;

  // useMemo to optimize chart data calculation
  // recalculate only when consumption/temperature changes
  const chartData = useMemo(() => {
    return {
      labels: generateTimeLabels(),
      datasets: prepareDatasets(consumption, temperature),
    };
  }, [consumption, temperature]); // Dependencies - recompute if 'consumption / temperature' changes

  return (
    <div className={styles.ChartContainer}>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default EnergyTemperatureGraph;
