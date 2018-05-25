google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
    chart: {
      title:'Enterprise Rentals'
    },
    backgroundColor: '#ffffff',
    width: 900,
    height: 400,
    lineWidth: 5;
  };
  
  var chart = new google.charts.Line(document.getElementById('graph1'));
  chart.draw(data, google.charts.Line.convertOptions(options));
}
