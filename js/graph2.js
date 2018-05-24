google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
    backgroundColor: '#ffffff',
    height: 500
  };
  
  var chart = new google.charts.Line(document.getElementById('graph2'));
  chart.draw(data, options);
}
