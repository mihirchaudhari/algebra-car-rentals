google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Total Cost');
  
  data.addRows([
    [0, 150],
    [1, 210],
    [2, 270],
    [3, 330],
    [4, 390],
    [5, 450],
    [6, 510],
    [7, 570],
    [8, 630],
    [9, 690],
    [10, 750]
  ]);
  
  var options = {
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Cost'
    },
    title: {
      'Enterprise Rentals 2'
    },
    backgroundColor: '#ffffff'
    width: 900,
    height: 500
  };
  
  var chart = new google.visualization.LineChart(document.getElementById('graph1'));
  chart.draw(data, options);
}
