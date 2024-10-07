# Janus Technology Interview Task
## Energy Usage and Temperature Data Visualisation

### Overview

This project is a React application designed to visualise energy usage and temperature data through interactive charts. It empowers users to gain insights into their energy usage patterns and observe how these patterns correlate with temperature over time. The application provides a visualization of both energy consumption (in kWh) temperature (in degrees Celsius) over time (in minutes) on a single graph. The data is sourced from a JSON file, and the graph combines a line chart to display temperature and a bar chart to show hourly energy consumption, both plotted against time from midnight to midnight.

The graph uses dual Y-axes: one for energy consumption and one for temperature. The X-axis represents time of day in minutes (0 to 1440), where 810 minutes would correspond to 1:30 PM.

The temperature data is sparse and not recorded at consistent intervals, while energy consumption is measured hourly. The visualization allows users to easily interpret and analyse hourly energy consumption alongside temperature over time on the same graph.


### Functionality

- Line Graph for Temperature: Displays temperature values on a continuous line. The Y-axis for temperature is scaled in degrees Celsius.

- Bar Chart for Energy Consumption: Displays hourly energy consumption as bars. The Y-axis for energy is scaled in kWh.

- Dual Y-Axis Scales: The graph utilizes two Y-axes to allow simultaneous visualization of both datasets.

- Dynamic Data Loading: The data is loaded from a JSON file, which contains both temperature and energy consumption information with time in minutes.


### Implementation

This project was implemented in VS Code using React and Chart.js (through the react-chartjs-2 library). The app dynamically fetches data from a provided JSON file and plots it using a combined line and bar chart.

1. Installed Node.js
2. Create a New Project - `janus-react-task`
4. Create a react app:
    - `npx create-react-app data-visualisation-app`
    - cd data-visualisation-app
5. Installed necessary dependencies for using chart.js library:
    - `npm install react-chartjs-2 chart.js`
6. Create the necessary files and directories.
    
         

#### Technologies Used
- VS Code: To implement application. 
- React: JavaScript library to create the user interface.
- Chart.js: A JavaScript library for data visualization, utilized via react-chartjs-2 to render the charts.
- JavaScript: For logic and interactivity.


#### Component Breakdown

The project consists of components that render charts using the `react-chartjs-2` and `chart.js` libraries. The main focus is on presenting energy consumption and temperature data effectively.

- App.js: The main component that fetches data from the JSON file and renders the EnergyTemperatureGraph component.
- EnergyTemperatureGraph.js: Handles rendering the dual-axis chart (temperature as a line graph and consumption as a bar chart over time).
- chartdatautils.js: A utility module containing helper functions to prepare datasets, generate time labels, and configure chart options.

#### Setting Up Project
