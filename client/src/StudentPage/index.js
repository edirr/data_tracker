import React, { Component } from 'react';


class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single_student_data: [],
      student_id: [],
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






  render(){
  // let student =
  //     this.state.single_student_data.length === 0
  //       ? ""
  //       : this.state.single_student_data

    return(
      <div class="student-page">
      <h1>Student Name</h1>
      </div>
      )


  }

}




export default StudentPage;
