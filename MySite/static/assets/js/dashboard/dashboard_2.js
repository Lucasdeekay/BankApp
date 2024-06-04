//  Sales Summary chart start
var optionssalessummary = {
  series: [
    {
      name: "Activity",
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 100,
    type: "bar",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 3,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
        show: false
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
        show: false
    },
  },
  colors: ['#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', dunzoAdminConfig.primary, '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd'],
};
var chartasalessummary = new ApexCharts(
  document.querySelector("#online-chart"),
  optionssalessummary
);
chartasalessummary.render();
var options = {
  series: [{
    name: "Desktops",
    data: [ 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
}],
  chart: {
  type: 'area',
  offsetY: 30,
  height: 140,
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
    color: dunzoAdminConfig.secondary,
    opacity: 0.2,
  },
},
colors: [dunzoAdminConfig.secondary],
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.5,
    opacityTo: 0.1,
    stops: [0, 90, 100]
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
    curve: 'straight',
    width: 2,
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 12,
      fillColor: dunzoAdminConfig.secondary,
      strokeColor:'#fff',
      size: 5,
      shape: "circle"
    }],
  },
  responsive: [{
    breakpoint: 1661,
    options: {
        chart: {
            height: 140
        },
    },
  }
],
};
var chart = new ApexCharts(document.querySelector("#offline-chart"), options);
chart.render();
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
    color: '#DC3545',
    opacity: 0.2,
  },
},
colors: ['#DC3545'],
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
          fillColor: "#DC3545",
          strokeColor: "#fff",
          size: 6,
          shape: "circle"
      },
      ],
    },
};
var chart = new ApexCharts(document.querySelector("#Revenue-chart"), options);
chart.render();
var options1 = {
  series: [52, 35, 15, 45],
  chart: {
    type: 'donut',
    height: 200,
  },
  dataLabels:{
    enabled: false
  },
  legend:{
    show: false
  },
  responsive: [{
    breakpoint: 1700,
    options: {
        chart: {
            height: 150
        },
    },
  },{
    breakpoint: 1441,
    options: {
        chart: {
            height: 205
        },
    },
  },{
    breakpoint: 421,
    options: {
        chart: {
            height: 170
        },
    },
  }
],
  plotOptions: {
    pie: {
        expandOnClick: false,
        donut: {
            size: "70%",
            labels: {
                show: true,
                value: {
                  offsetY: 5,
                },
                total: {
                    show: true,
                    fontSize: "14px",
                    color: "#9B9B9B", 
                    fontFamily: "Outfit', sans-serif",
                    fontWeight: 400,
                    label: "Total",
                    formatter: () => "60%",
                },
            },
        },
    },
},
  yaxis: {
    labels: {
        formatter: function(val) {
            return val / 100 + "$";
        },
    },          
  },
  colors:[ dunzoAdminConfig.primary, '#DC3545' , '#53a653cf', dunzoAdminConfig.secondary],
};
var chart1 = new ApexCharts(document.querySelector("#Categories-chart"), options1);
chart1.render();
var options = {
  series: [{
    name: "Desktops",
    data: [ 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
}],
  chart: {
  type: 'area',
  height: 200,
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
};
var chart = new ApexCharts(document.querySelector("#Earned-chart"), options);
chart.render();
var options = {
  series: [{
      name: 'Web App Design',
      data: [150, 100, 100, 100, 70, 70, 70 , 270, 50, 100]
  }, {
      name: 'Website Design',
      data: [320, 210, 290, 200, 230, 230, 230, 350, 230, 300]
  }, {
      name: 'App Design',
      data: [150, 165, 165, 165, 280, 155, 155, 140, 170, 130]
  }],
  colors: [dunzoAdminConfig.primary, '#78A6ED', '#4F5875'],
  chart: {
      type: 'bar',
      height: 320,
      stacked: true,
      toolbar: {
          show: false,
          tools: {
              download: false,
          }
      },
      zoom: {
          enabled: true
      }
  },
  responsive: [{
    breakpoint: 1661,
    options: {
      chart: {
        height: 340
      },
    },
  }],
  grid: {
    strokeDashArray: 3,
    position: "back",
    row: {
      opacity: 0.5,
    },
    column: {
      opacity: 0.5,
    },
  },
  plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: '20%',
      },
  },
  dataLabels: {
      enabled: false,
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July' , 'Aug' , 'Sep', 'Oct'],
      labels: {
        style: {
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            colors: '#8D8D8D',
        },
    },
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
  legend: {
      show: false,
  },
  fill: {
      opacity: 1
  }
};
var statisticschart = new ApexCharts(document.querySelector("#total-project"), options);
statisticschart.render();
var growthoptions = {
  series: [{
      name: 'Growth',
      data: [0, 14, 5, 20, 14, 30]
  }],
  chart: {
      height: 120,
      type: 'line',
      stacked: true,
      offsetY: 40,
      toolbar: {
          show: false
      },
  },
  grid: {
      show: false,
      borderColor: '#000000',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
          lines: {
              show: false,
          },
      },
      yaxis: {
          lines: {
              show: true,
          },
      },
  },
  colors: [dunzoAdminConfig.primary],
  stroke: {
      width: 3,
      curve: 'smooth'
  },
  xaxis: {
    labels: {
        show: false
    },
  },
  yaxis: {
      min: -10,
      max: 40,
      labels: {
          show: false
      }
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 0,
      fillColor: dunzoAdminConfig.primary,
      strokeColor: dunzoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: dunzoAdminConfig.primary,
      strokeColor: dunzoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: dunzoAdminConfig.primary,
      strokeColor: dunzoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 3,
      fillColor: dunzoAdminConfig.primary,
      strokeColor: dunzoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 4,
      fillColor: dunzoAdminConfig.primary,
      strokeColor: dunzoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: "#fff",
      strokeColor: dunzoAdminConfig.primary,
      size: 5,
      shape: "circle"
    },
    ],
  },
};
var growthchart = new ApexCharts(document.querySelector("#monthlychart"), growthoptions);
growthchart.render();
(function ($) {
  "use strict";
  //product box
  var owl_carousel_custom = {
    init: function () {
  $("#owl-carousel-dashboard").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      1000:{
          items:1
      },
      0:{
        items: 1
      }
    }
  })
},
};
})(jQuery);