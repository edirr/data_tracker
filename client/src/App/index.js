import React, { Component } from 'react';
import './style.css';
import ClassList from "../ClassList"

class App extends Component {
  constructor() {
    super();
    this.state = {
      student_data: null,
    };
  }

  // componentDidMount() {
  //   fetch('/students').then(res => res.json()).then((jsonRes) => {
  //     this.setState({
  //       student_data: jsonRes.students_data,
  //     });
  //   });
  // }

  componentDidMount(){
    fetch('/students')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ student_data: data }) });
  }



  render() {
    const students = this.state.student_data
    console.log(students)
    return (
      <div className="App">
     <ClassList students={students}/>

      </div>
    );
  }
}

export default App;
