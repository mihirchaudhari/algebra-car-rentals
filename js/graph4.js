google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Total Cost');
  
  data.addRows([
    [0, 100],
    [1, 150],
    [2, 200],
    [3, 250],
    [4, 300],
    [5, 350],
    [6, 400],
    [7, 450],
    [8, 500],
    [9, 550],
    [10, 600]
  ]);
  
  var options = {
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Cost'
    },
    title: {
      'Enterprise Rentals'
    },
    backgroundColor: '#ffffff'
    width: 900,
    height: 500
  };
  
  var chart = new google.visualization.LineChart(document.getElementById('graph1'));
  chart.draw(data, options);
}
