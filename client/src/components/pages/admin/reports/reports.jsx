import React from 'react'
import {Bar} from 'react-chartjs-2'



const colors = ['#004876', '#0063a0', '#007ecc', '#0093ee', '#82caf8', '#c8e6f4'];
const options = {
    layout: {
      padding: {
        bottom: 0,
        top: 0
      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        stacked: true,
          }],
    },
        responsive: true,
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontColor: '#91929b',
              padding: 20
            }
          }
        };
const chartData = {
  labels: ["08-2018", "09-2018", "10-2018", "11-2018"],
  datasets: [{
      label: 'Air',
      data: [20000, 10000, 2000, 25000],
      stack:'1',
      backgroundColor: colors[0],
      borderWidth: 0
    },
    {
      label: 'Express',
      stack: '2',
      data: [20000, 20000, 2000, 25000],
      backgroundColor: colors[1],
      borderWidth: 0
    },
    {
      label: 'LCL',
      data: [5000, 5000, 20000, 25000],
      backgroundColor: colors[2],
      borderWidth: 0,
      stack: '3'
    },
    {
      label: 'FTL',
      data: [20000, 10000, 12000, 25000],
      backgroundColor: colors[3],
      borderWidth: 0,
      stack: '4',
    },
    {
      label: 'LTL',
      data: [20000, 5000, 10000, 25000],
      backgroundColor: colors[4],
      borderWidth: 0,
      stack: '5',
    },
    {
      label: 'FCL',
      data: [5000, 10000, 5000, 25000],
      backgroundColor: colors[5],
      borderWidth: 0,
      stack: '6',
    },
  ]
};

class Reports extends React.Component {
 
  render() {
      return ( <div className = "Report" >
      <header className = "Report-Header" >
      <div>
        <Bar 
        data={chartData}
        options={options}
        width={700}
        height={350} 
        />
        </div>
      </header>
       </div>
    );
  }
}
export default Reports;