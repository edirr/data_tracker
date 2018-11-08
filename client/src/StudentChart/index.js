import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

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
    const differentMathProps = this.props.studentMathScores !== nextProps.studentMathScores;
    return differentMathProps || differentProps
  }

  // componentWillReceiveProps(nextProps){
  //     if(nextProps.chartData !== this.props.chartData){
  //         let chartData = Object.assign({}, this.state.chartData);    //creating copy of object
  //         chartData.datasets[0].data = nextProps.scores;                        //updating value
  //         this.setState({chartData});
  //     }
  // }

  render() {
    // console.log(this.props.studentScores)
    // let data =
    //     this.props.studentScores.length < 1
    //       ? "No data"
    //       : this.props.studentScores

    let chartData = {
      labels: [],
      datasets: [
        {
          label: "ELA",
          labels: [],
          data: [],
          showLine: true,
          backgroundColor: "darkBlue",
          fill: false,
          borderColor: "darkBlue",
          lineTension: .2
        },
        {
          label: "Math",
          labels: [],
          data: [],
          showLine: true,
          backgroundColor: "red",
          fill: false,
          borderColor: "red",
          lineTension: .2
        }

      ],
    };
    //ELA Scores and Names
    let scores =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return chartData.datasets[0].data.push(test.grade);
          });
    let testNames =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return chartData.datasets[0].labels.push(test.test_name);
          });

        let ticks =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return chartData.labels.push('');
          });


      //Math Test Scores and Names
      let mathScores =
      this.props.studentMathScores.length < 1
        ? "No data"
        : this.props.studentMathScores.map(test => {
            return chartData.datasets[1].data.push(test.grade);
          });
    let mathTestNames =
      this.props.studentScores.length < 1
        ? "No data"
        : this.props.studentScores.map(test => {
            return chartData.datasets[1].labels.push(test.test_name);
          });


    // let studentName = this.props.student.length == undefined
    // ? "" : `${this.props.student.name} Scores`

    // let averageScores =
    //   this.props.studentScores.length < 1
    //     ? "No data"
    //     : this.props.studentScores.map(test => {
    //         return test.grade;
    //       });
    // let average = averageScores.reduce((acc, val) => acc + val, 100);
    // console.log(this.props.studentMathScores)
    // console.log(this.props.studentScores)
    return (
      <div className="chart">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Student Scores",
              fontSize: 25
            },
            showLine: true,
            legend: {
              display: true,
              position: "right"
            },
            tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var index = tooltipItem.index;
            return dataset.labels[index] + ': ' + dataset.data[index];
          }
        }
      },
            scales: {
              xAxes: [{
                distribution: 'series',
                ticks:{
                  autoSkip: false,
                  display: false,
                },
                // type: "time",
              }],
              yAxes: [
                {
                  scaleLabel: {
        display: true,
        labelString: 'Grade'
      },
                  display: true,
                  // stacked: true,
                  ticks: {
                    min: 60,
                    max: 100
                  }
                }
              ]
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
