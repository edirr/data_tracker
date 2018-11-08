import React, { Component } from 'react';
import {hot} from "react-hot-loader";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './style.css';
import ClassList from "../ClassList";
import StudentPage from "../StudentPage";
import NavBar from "../NavBar";
import CreateStudentForm from "../CreateStudentForm";
import CreateTestForm from "../CreateTestForm";
import CreateMathTestForm from "../CreateMathTestForm";

import 'bulma';



class App extends Component {
  constructor() {
    super();
    this.state = {
      student_data: [],
      student_test_data: [],
      student_math_test_data: [],
      student_id:[],
      single_student_data: '',
      form_subject: '',


    };
    this.getStudents = this.getStudents.bind(this);
    this.getSingleStudentScores = this.getSingleStudentScores.bind(this);
    this.clearStudentId = this.clearStudentId.bind(this);
    this.sendStudentId = this.sendStudentId.bind(this);
    this.getSingleStudent = this.getSingleStudent.bind(this);
    this.newStudentSubmitAction = this.newStudentSubmitAction.bind(this);
    this.newTestSubmitAction = this.newTestSubmitAction.bind(this);
    this.newMathTestSubmitAction = this.newMathTestSubmitAction.bind(this);
    this.updateSubject = this.updateSubject.bind(this);
  }

  async newStudentSubmitAction(newStudent) {
    fetch('/api/students', {
                method: 'POST',
                body:JSON.stringify(newStudent)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
    // fetch / post (newStudent)
    // const studentID = await fetch('/students','post', newStudent);
    // this.getStudents();
    console.log(newStudent)
  }

  async newTestSubmitAction(newTest) {
    // console.log(newTest)
    await fetch(`/api/students/${this.state.student_id}/tests`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
  },
                body:JSON.stringify(newTest)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
            this.getSingleStudentScores();
  }
  async newMathTestSubmitAction(newTest) {
    console.log(newTest)
    await fetch(`/api/students/${this.state.student_id}/mathtests`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
  },
                body:JSON.stringify(newTest)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
            this.getSingleStudentMathScores();
  }

 async getStudents(){
    fetch('/api/students')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({
        student_data: data,


       }) });
}
 async getSingleStudentScores(){
   // const id = this.state.student_id
   let studentTests = `/api/students/${this.state.student_id}/tests`
   // console.log(studentTests)
    await fetch(studentTests)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ student_test_data: data }) });
}

async getSingleStudentMathScores(){
   // const id = this.state.student_id
   let studentMathTests = `/api/students/${this.state.student_id}/mathtests`
   // console.log(studentTests)
    await fetch(studentMathTests)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ student_math_test_data: data }) });
}

async getSingleStudent(){
  // const id = this.state.student_id
  let studentId = `/api/students/${this.state.student_id}`
  // console.log(`/students/${this.state.student_id}`)
    await fetch(studentId)
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
      this.getSingleStudentMathScores();
  }

  updateSubject(event){
    // console.log(event)
    // destructure the event
    // const { name, value } = event.target;

    // set the state as needed
    this.setState({
      form_subject: event.target.name
    });
  }











  render() {
    const students = this.state.student_data
    const student = this.state.single_student_data
    const tests = this.state.test_data
    const studentMathScores = this.state.student_math_test_data
    const studentScores = this.state.student_test_data

    // if(this.state.form_subject === 'ela'){
    //        <CreateTestForm newTestSubmitAction={this.newTestSubmitAction} />
    //       }else if (this.state.form_subject === math){
    //       <CreateMathTestForm newMathTestSubmitAction={this.newMathTestSubmitAction} />

    //     }

// {this.state.form_subject === "ela" ? <CreateTestForm newTestSubmitAction={this.newTestSubmitAction} /> :
         // <CreateMathTestForm newMathTestSubmitAction={this.newMathTestSubmitAction} />}
    return (

      <div className="app">
      <NavBar />
      <div className="page-content columns is-mobile">
          <div className="column is-one-fifth">
          <ClassList sendStudentId={this.sendStudentId} students={students}/>
          </div>
          <div className="column is-three-fifths">
          <StudentPage student={student} studentScores={studentScores} studentMathScores={studentMathScores}/>
          </div>
          <div className="column is-one-fifth new-student-form">
          <div className="student-form">
          <CreateStudentForm newStudentSubmitAction={this.newStudentSubmitAction}/>
          </div>

          <div className="test-form buttons">
          <div className="subject">
      <button className="button" onClick={this.updateSubject} name="ela" value="ela">
        ELA
      </button>
      <button className="button" onClick={this.updateSubject} name="math" name="math">
        Math
      </button>

    </div>
        {this.state.form_subject === "math" ? <CreateMathTestForm newMathTestSubmitAction={this.newMathTestSubmitAction} /> :
            <CreateTestForm newTestSubmitAction={this.newTestSubmitAction} /> }
            </div>


          </div>
      </div>
      </div>

    );
  }
}

export default hot(module)(App);







// <div class="dropdown is-active">
//   <div class="dropdown-trigger">
//     <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" >
//       <span>Add Score</span>
//       <span class="icon is-small">
//         <i class="fas fa-angle-down" aria-hidden="true"></i>
//       </span>
//     </button>
//   </div>
//   <div class="dropdown-menu" id="dropdown-menu" role="menu">
//     <div class="dropdown-content">
//       <a onClick={this.updateSubject} name="ela" value="ela" class="dropdown-item">
//         ELA
//       </a>
//       <a onClick={this.updateSubject} name="math" name="math" class="dropdown-item">
//         Math
//       </a>
//     </div>
//   </div>
// </div>
