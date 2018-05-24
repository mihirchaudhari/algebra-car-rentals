google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Total Cost');
  
  data.addRows([
    [0, 55],
    [1, 100],
    [2, 145],
    [3, 190],
    [4, 235],
    [5, 280],
    [6, 325],
    [7, 370],
    [8, 415],
    [9, 460],
    [10, 505]
  ]);
  
  var options = {
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Cost'
    },
    title: {
      'Alamo Rentals'
    },
    backgroundColor: '#ffffff',
    width: 900,
    height: 500
  };
  
  var chart = new google.charts.Line(document.getElementById('graph3'));
  chart.draw(data, options);
}
