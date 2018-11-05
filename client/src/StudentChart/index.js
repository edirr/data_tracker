import React, { Component } from "react";
import { Bar, Line } from 'react-chartjs-2';


class StudentChart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  addData(chart, label, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

  shouldComponentUpdate(nextProps) {
    const differentProps = this.props.studentScores !== nextProps.studentScores;
    return differentProps;
    }





render(){
  // console.log(this.props.studentScores)
  // let data =
  //     this.props.studentScores.length < 1
  //       ? "No data"
  //       : this.props.studentScores


  let scores =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return (
              test.grade
            );
          });
console.log(scores)



  let chartData = {
        labels: ['unit 1', 'unit 2', 'unit 3', 'unit 4', 'unit 5', 'unit 6'],
        datasets:[
          {
            label:'Score',
            data:[scores],

          }
        ]
      }
      console.log(chartData)
  return (
<div className="chart">

<Line
    data={chartData}
    options={{
        maintainAspectRatio: true
    }}
/>


</div>


  );
}
}

export default StudentChart;





