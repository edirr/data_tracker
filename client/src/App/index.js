import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './style.css';
import ClassList from "../ClassList";
import StudentPage from "../StudentPage";
import NotFound from "../NotFound";


class App extends Component {
  constructor() {
    super();
    this.state = {
      student_data: [],
      test_data: [],


    };
    this.getStudents = this.getStudents.bind(this);
    this.getScores = this.getScores.bind(this);
     // this.getSingleStudent = this.getSingleStudent.bind(this);
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
// async getSingleStudent(){
//     fetch({`/students/${this.state.student_id}`})
//       .then((response) => {return response.json()})
//       .then((data) => {this.setState({ single_student_data: data }) });
// }

  componentDidMount(){
    this.getStudents();
    this.getScores();
    // this.getSingleStudent();
  }







  render() {
    const students = this.state.student_data
    const tests = this.state.test_data

    return (

      <BrowserRouter>

      <div className="app">
      <div className="pageContent">
        <Switch>
        <Route exact path="/" render={ (props) =>
          <ClassList students={students}/>
         }/>
         <Route exact path="/student/:id" render={ (props) =>
          <StudentPage students={students}/>
         }/>

        <Route component={NotFound}/>

        </Switch>
      </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
