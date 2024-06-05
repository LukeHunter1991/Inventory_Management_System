// Function to display the various charts on the application
function displayChart(chartCanvasElement, dataautocolors, xData, yData) {
  //Include the CDN versions
  var jQueryScript = document.createElement('script');
  jQueryScript.setAttribute(
    'src',
    'https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors'
  );
  document.head.appendChild(jQueryScript);

  var jQueryScript2 = document.createElement('script');
  jQueryScript2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/chart.js');
  document.head.appendChild(jQueryScript2);

  // registered the autocolors on chart
  Chart.register(autocolors);

  // Getting the context of the canvas element
  const canvasContext = document
    .getElementById(chartCanvasElement)
    .getContext('2d');

  let chartType;
  let chartCustomOptions;

  if (chartCanvasElement === 'item-category-chart') {
    chartType = 'pie';

    // The expected data ie the categories from the controller are set on the labels of the pie chart
    var categorylabelData = xData;
    const labelCategories = categorylabelData.split(',');

    // The expected data ie the No of items per category from the controller are set on the datasets data of the pie chart
    var itemcount = yData;
    const itemValues = itemcount.split(',');
    const dataItemCnt = itemValues.map((item) => parseInt(item));
    // This is to update the data of the PIE chart in different colors.

    chartCustomOptions = {
      //Included the autocolors plugin to apply on the chart
      plugins: [autocolors],
      type: chartType, //Specify the type of chart to be created
      data: {
        visible: true,
        labels: labelCategories,
        //datasets helps to customize the colors and labels
        datasets: [
          {
            label: 'Number of Items',
            data: dataItemCnt,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          autocolors: {
            mode: 'data',
          },
        },
      },
    };
  } else {
    // Displaying the Bar Chart fot the Employee Usage Statistics.

    chartType = 'bar';
    // The expected data ie the employees from the controller are set on the xAxis of the bar chart
    var emplabelData = xData;
    const xValues = emplabelData.split(',');
    // The expected data ie the No of transaction per employee from the controller are set on the yAxis of the pie chart
    var txncount = yData;
    const txnValues = txncount.split(',');
    const yValues = txnValues.map((item) => parseInt(item));

    chartCustomOptions = {
      type: 'bar', //Specify the type of chart to be created
      data: {
        visible: true,
        labels: xValues,
        //datasets helps to customize the colors and labels
        datasets: [
          {
            label: 'Number of Transactions',
            data: yValues,
            borderWidth: 1,
            borderColor: '#8d7cbb', // Border color
            backgroundColor: '#8d7cbb', // Background color overides the autocolors.
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            //customize the yAxis of the chart
            beginAtZero: true,
            max: 30,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    };
  }

  return new Chart(canvasContext, chartCustomOptions);
}
