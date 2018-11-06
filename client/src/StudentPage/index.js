import React, { Component } from 'react';
import StudentChart from "../StudentChart"

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.getSingleStudent = this.getSingleStudent.bind(this);
  }

// async getSingleStudent(){

//   const id = this.state.student_id
//   const studentId = `/students/${id}`
//   console.log(studentId)
//     fetch({studentId})
//       .then((response) => {return response.json()})
//       .then((data) => {this.setState({ single_student_data: data }) });
// }
// componentDidMount(){

//   }

// componentWillReceiveProps(){
//   let chartData = Object.assign({}, this.state.chartData);
//   chartData.datasets.data = "this.props.studentScores";
//   this.setState({chartData});
// }

// shouldComponentUpdate(nextProps) {
//     const differentProps = this.props.studentScores !== nextProps.studentScores;
//     return differentProps;
//     }






  render(){
  let student =
      this.props.student.length < 1
        ? ""
        : this.props.student

let studentScores = this.props.studentScores
 // if (this.props.studentScores.length > 0){
 //   let scores = this.props.studentScores.map(test => {
 //            return (
 //              test.grade
 //            );
 //          })
 //   console.log()
 //   return scores
 // }
      // let studentScores = this.props.studentScores.length < 1
      //   ? "No Data"
      //   : this.props.studentScores.map(test => {
      //       return (
      //         test.grade
      //       );
      //     });

      // checkForData(){

      // }


    return(
      <div className="student-page">
      <div className="student-info">
      <h1><strong>Name: </strong>{student.name}</h1>
      <h1><strong>Address: </strong>{student.address}</h1>
      <h1><strong>Age: </strong>{student.age}</h1>
      </div>
      <div className="student-chart">
      <StudentChart student={student} studentScores={studentScores}/>
      </div>
      </div>
      )


  }

}




export default StudentPage;
