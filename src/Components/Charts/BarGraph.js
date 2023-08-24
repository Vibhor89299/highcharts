import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import HCDataLabels from 'highcharts/modules/data-labels';

// Initialize the data labels module
//HCDataLabels(Highcharts);

const options = {
  chart: {
    reflow:true,
    type: 'bar',
    height: 200 ,
    marginTop: 100,
    width:350,
  },
  title: {
    text: 'Avg Time to Adopt by Age Bucket',
    style: {
      fontSize: '18px',
      color:'grey'
    }
  },
  xAxis: {
    categories: ['0-1 Puppy', '2-6 Adult', '7+ Senior'],
    title: {
      text: null
    },
    lineWidth:0,
    gridLineWidth: 0
  },
  yAxis: {
    title: {
      text: null
    },
    gridLineWidth: 0 ,
  },
  legend: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        format: '{y}',
        style: {
          color: '#000000'
        }
      }
    }
  },
  series: [{
    data: [30, 85, 103],
    borderColor: '#91D9D9',
    color: '#80e5ff',
    
  }]
};

const options2 = {
    chart: {
      type: 'area',
      width:300,
      height:400,   
    },
    title: {
      text: 'Avg Time to Adopt Over Time',
      style: {
        fontSize: '18px',
        color:'grey'
      }
    },
    xAxis: {
      categories: ['2017', '2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
      title: {
        text: 'Avg Time'
      },
      gridLineWidth: 0
    },
    series: [{
      name: 'Avg Time to Adopt in Time',
      data: [40, 30, 60, 40, 80, 90],
      color: '#80dfff',
      fillColor: {
        linearGradient: [0, 0, 0, 230],
        stops: [
          [0, '#80dfff'],
          [1, 'rgba(145, 217, 217, 0)']
        ]
      },
      lineWidth: 4,
      marker: {
        enabled: false
      }
    }]
  };
  
  const options3 = {    
    chart:{
        marginTop :100,
        height:70,
        width:460   
    },
    title: {
      text: 'Avg Time to Adopt ',
      style:{
        fontSize: '28px',
        color:'grey',  
      }
    },
  };

const BChart = () => {
  return (
    <div>
        <HighchartsReact highcharts={Highcharts} 
        options={options3} 
        />
        
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />

        <HighchartsReact
        highcharts={Highcharts}
        options={options2}
        
      />

    </div>
      
    
  );
};

export default BChart;