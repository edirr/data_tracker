import React, { Component } from 'react';

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
        <h1>{student.name}</h1>
        <p>{student.age}</p>
        <p>{student.address}</p>
        </div>
        )
    }));

    return(
      <div>
      {students}
      </div>
      )


  }

}




export default ClassList;
