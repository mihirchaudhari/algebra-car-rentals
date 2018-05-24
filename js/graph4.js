google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
      'Bronco Rentals'
    },
    backgroundColor: '#ffffff',
    height: 500
  };
  
  var chart = new google.charts.Line(document.getElementById('graph1'));
  chart.draw(data, options);
}
