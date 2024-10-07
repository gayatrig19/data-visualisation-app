import React from "react";
import styles from "./App.module.css";
import EnergyTemperatureGraph from "./components/EnergyTemperatureGraph";

// Main App component that handles data fetching and renders the graph
function App() {
  return (
    <div className={styles.App}>
      <h1>Energy Usage and Temperature Visualization</h1>
      <EnergyTemperatureGraph />
    </div>
  );
}

export default App;
