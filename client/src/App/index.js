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
      test_data: [],
      student_id:[],
      single_student_data: [],


    };
    this.getStudents = this.getStudents.bind(this);
    this.getScores = this.getScores.bind(this);
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
 async getScores(){
    fetch('/tests')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ test_data: data }) });
}
async getSingleStudent(){
  const id = this.state.student_id
  const studentId = `/students/${id}`
  console.log(studentId)
    fetch({studentId})
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
    this.getScores();

  }

  shouldComponentUpdate(){
    // this.getSingleStudent();
  }

  clearStudentId(){
    this.setState({
      student_id: []
    })
  }
  sendStudentId(e){
    // clearStudentId();
    this.setState({
      student_id: e.target.id
    })
  }











  render() {
    const students = this.state.student_data
    const tests = this.state.test_data

    return (

      <div className="app">
      <NavBar />
      <div className="page-content columns is-mobile">
          <div className="column is-one-fifth">
          <ClassList sendStudentId={this.sendStudentId} students={students}/>
          </div>
          <div className="column is-four-fifths">
          <StudentPage student_id={this.state.student_id}/>
          </div>
      </div>
      </div>

    );
  }
}

export default App;
