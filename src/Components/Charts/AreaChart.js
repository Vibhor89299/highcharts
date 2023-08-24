import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './ChartStyle.css';

const AreaChart =()=>{
  const options = {
    chart: {
        type: 'area',
        reflow: true,
        width: 400,
        height: 600,
        
    },
    title: {
        text: 'Lives Saved',
        style:{
            fontSize: '48px',
            color: 'grey'
        },
    },
    xAxis: {
        categories: ['2014', '2016', '2018', '2020', '2022']
    },
    yAxis: {
        gridLineWidth:0,
       title: false,
    },
    tooltip: {
      enabled: false
    },
    series: [{
        name:'',
        showInLegend:false,
        data: [1000, 3000, 5000, 7000, 8000],
        color: '#80dfff',
         fillColor: {
        linearGradient: [600, 10, 0, 0],
        stops: [
          [0, '#80dfff'],
          [1, 'rgba(145, 217, 217, 0)']
        ]
      },
        allowPointSelect: true,
        lineWidth: 4
    }]
};
    return(
    <div className="area">
        <HighchartsReact
        highcharts={Highcharts}
        options={options}      
  />  
    </div>
)
}
export default  AreaChart