import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';

const ThirdChart = () => {
  const options = {
    chart: {
      type: 'bar',
      reflow:true,
      width: 500,
      height: 300
    },
    title: {
      text: 'Proposion of Dogs that... ',
      style: {
        fontSize: '18px',
        color:'grey'
      }
    },
    xAxis: {
      categories: ['Gets Along with Dogs', 'Gets Along with Cats', 'Gets Along with Kids', 'Are Housebroken'],
      labels: {
        style: {
          color: '#000000'
        }
      }
    },
    yAxis: {
        visible:false,
        title: {
        text: null
      },
      stackLabels: {
        enabled: true
      }
    },
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        borderWidth: 5,
        boxHeight: 10
      }
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'Does/Are',
        data: [87, 29, 58, 38],
        borderColor: '#91D9D9',
        color: ' #cccccc'
      },
      {
        name: 'no',
        data: [0, 7, 3, 6],
        borderColor: '#91D9D9',
        color: 'black'
      },
      {
        name: 'not sure',
        data: [12, 64, 39, 56],
        borderColor: 'black',
        color:'#80dfff'
      }
    ]
  };

  const optionz = {
    chart: {
      type: 'bar',
      width:350,
      height:300
    },
    title: {
      text: 'Top 10 Primary Breeds(Including Mixes)',
      style: {
        fontSize: '18px',
        color: 'grey'
      }
    },
    xAxis: {
      //visible: false,
      categories: ['Labrador' , 'Pit' , 'Hound' , 'Shepherd', 'Terier' , 'American' , 'Catahoula' , 'Hounds' , 'Australian' , 'mountain'],
      lineWidth: 0, 
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Breeds',
      data: [1422, 838, 400, 376, 306, 157, 155, 150, 126, 108],
      borderColor: '#91D9D9',
      color: '#80dfff',
      dataLabels: {
        enabled: true
      }
    }]
  };

  return (
    <div>
   
    <HighchartsReact highcharts={Highcharts} 
        options={options} 
        />
        <HighchartsReact highcharts={Highcharts} 
        options={optionz} 
        />
   
    </div>  
  );
};

export default ThirdChart;

