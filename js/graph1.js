google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Total Cost');
  
  data.addRows([
    [0, 0],
    [1, 60],
    [2, 120],
    [3, 180],
    [4, 240],
    [5, 300],
    [6, 360],
    [7, 420],
    [8, 480],
    [9, 540],
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
