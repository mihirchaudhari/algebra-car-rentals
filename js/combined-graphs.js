google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Enterprise Rentals');
  data.addColumn('number', 'Enterprise Rentals 2');
  data.addColumn('number', 'Alamo Rentals');
  data.addColumn('number', 'Bronco Rentals');
  
  data.addRows([
    [0, 0, 150, 55, 100],
    [1, 60, 210, 100, 150],
    [2, 120, 270, 145, 200],
    [3, 180, 330, 190, 250],
    [4, 240, 390, 235, 300],
    [5, 300, 450, 280, 350],
    [6, 360, 510, 325, 400],
    [7, 420, 570, 370, 450],
    [8, 480, 630, 415, 500],
    [9, 540, 690, 560, 550],
    [10, 600, 750, 505, 600]
  ]);
  
  var options = {
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Cost'
    },
    title: 'All Car Rentals',
    subtitle: 'Side by side',
    backgroundColor: '#ffffff',
    width: 900,
    height: 500,
    lineWidth: 5
  };
  
  var chart = new google.charts.Line(document.getElementById('combined-graphs'));
  chart.draw(data, google.charts.Line.convertOptions(options));
}
