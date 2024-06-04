var options = {
    series: [{
      name: "Desktops",
      data: [15, 14, 11, 20, 10, 15 , 11],
  }],
    chart: {
    type: 'area',
    height: 120,
    offsetY: 10,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }, 
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      bottom: 3,
      blur: 2,
      color: dunzoAdminConfig.primary,
      opacity: 0.2,
    },
  },
  colors: [dunzoAdminConfig.primary],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100]
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false,
  },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: dunzoAdminConfig.primary,
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
      },
  };
  var chart = new ApexCharts(document.querySelector("#budget-chart"), options);
  chart.render();
  var options = {
    series: [75],
    chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '55%',
      }
    },
  },
  responsive: [{
    breakpoint: 1661,
    options: {
        chart: {
            height: 280
        },
    },
  },{
    breakpoint: 1581,
    options: {
        chart: {
            height: 250
        },
    },
  },{
    breakpoint: 1471,
    options: {
        chart: {
            height: 242
        },
    },
  },{
    breakpoint: 1441,
    options: {
        chart: {
            height: 300
        },
    },
  },
  {
    breakpoint: 1301,
    options: {
        chart: {
            height: 250
        },
    },
  },
  {
    breakpoint: 1200,
    options: {
        chart: {
            height: 300
        },
    },
  },{
    breakpoint: 1140,
    options: {
        chart: {
            height: 250
        },
    },
  },{
    breakpoint: 992,
    options: {
        chart: {
            height: 300
        },
    },
  },
  {
    breakpoint: 821,
    options: {
        chart: {
            height: 270
        },
    },
  },
],
  colors: [dunzoAdminConfig.primary],
  labels: ['Progress'],
  };
  var chart = new ApexCharts(document.querySelector("#progress-chart"), options);
  chart.render();
  var options = {
    series: [{
    name: 'TEAM A',
    type: 'column',
    data: [220,, 250, , 210, , 210, , 270, , 220, , 250, , 260, , 210, , 230]
  },{
    name: 'TEAM B',
    type: 'area',
    data: [210,170, 240, 160, 200, 170, 200, 150, 260, 170, 210,170,240, 160, 250, 140, 200, 140,220,220]
  }],
    chart: {
    height: 355,
    type: 'area',
    stacked: false,
    toolbar: {
      show: false,
    }
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'stepline'
  },
  plotOptions: {
    bar: {
      columnWidth: '100px'
    }
  },
  colors: [ '#bebebe' , dunzoAdminConfig.primary],
  dropShadow: {
    enabled: true,
    top: 5,
    left: 6,
    bottom: 5,
    blur: 2,
    color: dunzoAdminConfig.primary,
    opacity: 0.5,
  },
  fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },    
  grid :{
    show: true,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    },
  },
  xaxis: {
    categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun" ,"" , "July" , "" , "Aug" , "" , "Sep" , "" , "Oct" , ""],
    labels: {
      style: {
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          colors: '#8D8D8D',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
    yaxis: {
      labels: {
        style: {
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            colors: '#8D8D8D',
        },
      },
    },
  legend:{
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex,}) {
      return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
    },
  },
  };
  var chart = new ApexCharts(document.querySelector("#revenuegrowth"), options);
  chart.render();