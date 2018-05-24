var graphData =[{
    //Enterprise Rentals 1
    data: [ [0, 0], [1, 60], [2, 120], [3, 180], [4, 240], [5, 300], [6, 360], [7, 420], [8, 480], [9, 540], [10, 600] ], 
    color: '#49b8dd'
  }, {
    //Enterprise Rentals 2
    data: [ [0, 150], [1, 210], [2, 270], [3, 330], [4, 390], [5, 450], [6, 510], [7, 570], [8, 630], [9, 690], [10, 750] ],
    color: '#75c46f'
  }, {
    //Alamo Car Rentals
    data: [ [0, 55], [1, 100], [2, 145], [3, 190], [4, 235], [5, 280], [6, 325], [7, 370], [8, 415], [9, 460], [10, 505] ],
    color: '#fff82d'
  }, {
    //Bronco Car Rentals
    data: [ [0, 100], [1, 150], [2, 200], [3, 250], [4, 300], [5, 350], [6, 400], [7, 450], [8, 500], [9, 550], [10, 600] ],
    color: '#ef900b'
  }
];

//Load the lines
$.plot($('#graph-lines'), graphData, { 
  series: {
    points: {
      show: true,
      radius: 5
    },
    lines: {
      show: true
    },
    shadowSize: 0
  },
  grid: {
    color: '#646464',
    borderColor: 'transparent',
    borderWidth: 20,
    hoverable: true
  },
  xaxis: {
    tickColor: 'transparent',
    tickDecimals: 2
  },
  yaxis: {
    tickSize: 1000
  }
});
