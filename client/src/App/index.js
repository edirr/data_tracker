import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './style.css';
import ClassList from "../ClassList";
import StudentPage from "../StudentPage";
import NavBar from "../NavBar";

import 'bulma';



class App extends Component {
  constructor() {
    super();
    this.state = {
      student_data: [],
      student_test_data: [],
      student_id:[],
      single_student_data: '',


    };
    this.getStudents = this.getStudents.bind(this);
    this.getSingleStudentScores = this.getSingleStudentScores.bind(this);
    this.clearStudentId = this.clearStudentId.bind(this);
    this.sendStudentId = this.sendStudentId.bind(this);
    this.getSingleStudent = this.getSingleStudent.bind(this);

  }

 async getStudents(){
    fetch('/students')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({
        student_data: data,


       }) });
}
 async getSingleStudentScores(){
   // const id = this.state.student_id
   let studentTests = `/student/tests/${this.state.student_id}`
   // console.log(studentTests)
    fetch(studentTests)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ student_test_data: data }) });
}
async getSingleStudent(){
  // const id = this.state.student_id
  let studentId = `/students/${this.state.student_id}`
  // console.log(`/students/${this.state.student_id}`)
    fetch(studentId)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ single_student_data: data }) });
}
// async getSingleStudent(){
//     fetch({`/students/${this.state.student_id}`})
//       .then((response) => {return response.json()})
//       .then((data) => {this.setState({ single_student_data: data }) });
// }

  componentDidMount(){
    this.getStudents();


  }

  // componentDidUpdate(){
  //   this.getSingleStudent();
  // }

  clearStudentId(){
    this.setState({
      student_id: []
    })
  }
  // sendStudentId(e){
  //   // clearStudentId();
  //   // this.setState({
  //     // student_id: e.target.id
  //     this.setState({student_id: e.target.id}, this.getSingleStudent, this.getSingleStudentScores)
  //   // this.getSingleStudent();
  // }

   async sendStudentId(e){
      await this.setState({student_id: e.target.id})
      this.getSingleStudent()
      this.getSingleStudentScores();
  }











  render() {
    const students = this.state.student_data
    const student = this.state.single_student_data
    const tests = this.state.test_data
    const studentScores = this.state.student_test_data

    return (

      <div className="app">
      <NavBar />
      <div className="page-content columns is-mobile">
          <div className="column is-one-fifth">
          <ClassList sendStudentId={this.sendStudentId} students={students}/>
          </div>
          <div className="column is-four-fifths">
          <StudentPage student={student} studentScores={studentScores}/>
          </div>
      </div>
      </div>

    );
  }
}

export default App;
