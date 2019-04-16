/*global echarts:true*/
$(function(){
  var myChart = echarts.init($('.main').get(0));
  var xData=[],
      yData=[];

  for(var p=0;p<=1;p+=0.1){
    xData.push(p);
    yData.push(h(p));
    console.log(xData,yData);
  }

  function h(p){
    return -1 * p * Math.log2(p) - (1-p) * Math.log2(1-p);
  }


  var option = {
    title: {
      text: '二进熵函数曲线'        
    },
    tooltip: {},
    legend: {
      data:['二进熵']    
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      data: yData
    }]
        
  };
  myChart.setOption(option);

});
