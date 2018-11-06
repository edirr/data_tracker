import React, { Component } from "react";
import { Bar, Line } from 'react-chartjs-2';


class StudentChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // chartData : {
      //   labels: ['unit 1', 'unit 2', 'unit 3', 'unit 4', 'unit 5', 'unit 6'],
      //   datasets:[
      //     {
      //       label:'Score',
      //       data: [props.scores],

      //     }
      //   ]
      // }

    };

  }
//   addData(chart, label, data) {
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }

  shouldComponentUpdate(nextProps) {
    const differentProps = this.props.studentScores !== nextProps.studentScores;

    return differentProps;

    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.chartData !== this.props.chartData){
    //         let chartData = Object.assign({}, this.state.chartData);    //creating copy of object
    //         chartData.datasets[0].data = nextProps.scores;                        //updating value
    //         this.setState({chartData});
    //     }
    // }





render(){
  // console.log(this.props.studentScores)
  // let data =
  //     this.props.studentScores.length < 1
  //       ? "No data"
  //       : this.props.studentScores



  let chartData = {
        labels: ['unit 1', 'unit 2', 'unit 3', 'unit 4', 'unit 5', 'unit 6'],
        datasets:[
          {
            label:'Score',
            data: [],
            backgroundColor: "#FC4A1A",
            fill: false,
            borderColor: "#FC4A1A",
            lineTension: 0,

          }
        ]
      }
        let scores =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return (
              chartData.datasets[0].data.push(test.grade)
            );
          });

// let studentName = this.props.student.length == undefined
// ? "" : `${this.props.student.name} Scores`

let averageScores =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return (
              test.grade
            );
          });
// let average = averageScores.reduce((acc, val) => acc + val, 100);
// console.log(studentName)
  return (
<div className="chart">

<Line
    data={chartData}
    options={{
        maintainAspectRatio: true,
        title:{
          display:true,
          text: 'Student Scores',
          fontSize: 25
        },
        legend:{
          display:true,
          position:"right"
        },
        scales: {
        yAxes: [{
          display: true,
          stacked: true,
          ticks: {
            min: 60,
            max: 100
                        }
                       }]
                    }
    }}
/>


</div>


  );
}
}

export default StudentChart;



// scales: {
//         yAxes: [{
//           display: true,
//           stacked: true,
//           ticks: {
//             min: 0,
//             max: 10
//                         }
//                        }]
//                     }





