// Function to setup datasets for both consumption and temperture
export const prepareDatasets = (consumption, temperature) => {
  // Map the consumption data to an array of {x, y} objects
  const consumptionData = consumption.map((cons) => ({
    x: cons.time,
    y: cons.value,
  }));

  // Map the temperature data to an array of {x, y} objects
  const temperatureData = temperature.map((temp) => ({
    x: temp.time,
    y: temp.value,
  }));

  /* Return an array of datasets for the chart:
  Consumption(bar chart) and Temp data(line graph) */
  return [
    {
      label: "Temperature / C",
      data: temperatureData,
      borderColor: "rgba(192, 0, 0, 255)",
      backgroundColor: "rgba(192, 0, 0, 255)",
      type: "line",
      yAxisID: "y",
      fill: false,
    },
    {
      label: "Consumption / kWh",
      data: consumptionData,
      borderColor: "rgba(21, 96, 130, 255)",
      backgroundColor: "rgba(21, 96, 130, 255)",
      yAxisID: "y1",
      type: "bar",
      barThickness: 35,
    },
  ];
};

// Function to generate labels for the x-axis (time in minutes)
export const generateTimeLabels = () => {
  const interval = 120;
  const timeLabels = [];

  // Loop from 0 to 1440 minutes (24 hours) and push each time interval into array
  for (let time = 0; time <= 1440; time += interval) {
    timeLabels.push(time);
  }
  return timeLabels;
};

// Customize Chart
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: "x",
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      min: 0,
      beginAtZero: true,
      offset: false,
      title: {
        display: true,
        text: "Time / minutes",
      },
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 120,
        callback: function (value) {
          return value.toString().replace(",", "");
        },
      },
      barPercentage: 1,
      categoryPercentage: 1,
      borderWidth: 1,
    },
    y: {
      type: "linear",
      position: "right",
      title: {
        display: true,
        text: "Temperature / C",
      },
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 5,
        callback: function (value) {
          const validTicks = [0, 5, 10, 15, 20, 25, 30];
          return validTicks.includes(value) ? value : "";
        },
      },
      min: 0,
      max: 30,
    },
    y1: {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "Consumption / kWh",
      },
      grid: {
        display: true,
      },
      ticks: {
        stepSize: 2,
        callback: function (value) {
          const validTicks = [0, 2, 4, 6, 8, 10, 12, 14];
          return validTicks.includes(value) ? value : "";
        },
      },
      min: 0,
      max: 14,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        // Customize the tooltip display for both time and data values
        title: function (context) {
          // Format time without commas
          const time = context[0].label;
          return time.toString().replace(",", "");
        },
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.raw !== null) {
            // Ensure the data value is always displayed with two decimal places
            label += parseFloat(context.raw.y).toFixed(2);
          }
          return label;
        },
      },
    },
  },
};
