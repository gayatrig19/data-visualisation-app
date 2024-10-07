/* Developed by - Gayatri Ghogare
 Janus Technology Interview Task */

import React, { useEffect, useState } from "react";
import EnergyTemperatureGraph from "./components/EnergyTemperatureGraph";
import styles from "./App.module.css";

// Main App component that handles data fetching and renders the graph
function App() {
  const [chartData, setChartData] = useState(null);

  // Fetch data from the JSON file when the component mounts
  useEffect(() => {
    fetch("./data/example_data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        setChartData(data);
      })
      .catch((error) => console.error("Error fetching JSON file:", error));
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div className={styles.App}>
      <h1>Energy Usage and Temperature Visualization</h1>
      {chartData ? (
        <EnergyTemperatureGraph data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
