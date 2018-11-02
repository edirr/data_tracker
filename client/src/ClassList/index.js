import React, { Component } from 'react';
import StudentTile from "../StudentTile"

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
  let students = this.props.students.length === 0 ? '' : this.props.students.map((student=>{
      return(
        <div>
        <StudentTile key={student.id} id={student.id} student={student}/>
        </div>
        )
    }));

    return(
      <div>
      <h1>Class List</h1>
      {students}
      </div>
      )


  }

}




export default ClassList;
