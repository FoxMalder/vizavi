$(function() {
  $('#graph-container_1').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: null,
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shared: false
    },
    series: [{
      showInLegend: false,
      data: [5, 3, 8, 2, 4]
    }]
  });
  $('#graph-container_2').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: null,
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shared: false
    },
    series: [{
      showInLegend: false,
      data: [5, 3, 8, 2, 4]
    }]
  });
});
