import React, { Component } from 'react';
import StudentChart from "../StudentChart"

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // single_student_data: [],
      // student_id: [],
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
//   this.setState({
//       student_id: this.props.student_id
//     })
//   this.getSingleStudent();
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


    return(
      <div class="student-page">
      <h1>Name:{student.name}</h1>
      <h1>Age:{student.age}</h1>
      <h1>Address:{student.address}</h1>
      <StudentChart studentScores={this.props.studentScores}/>
      </div>
      )


  }

}




export default StudentPage;
