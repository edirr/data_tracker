import React, { Component } from 'react';
import './style.css';
import ClassList from "../ClassList"

class App extends Component {
  constructor() {
    super();
    this.state = {
      student_data: [],
    };
  }


  componentDidMount(){
    fetch('/students')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ student_data: data }) });
      // console.log(data)
  }




  render() {
    const students = this.state.student_data

    return (
      <div className="App">
        <ClassList students={students}/>


      </div>
    );
  }
}

export default App;
